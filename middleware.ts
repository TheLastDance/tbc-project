import { NextRequest, NextResponse } from "next/server";
import { locales } from "./i18n.config";
import { createI18nMiddleware } from 'next-international/middleware'
import { getSession } from "@auth0/nextjs-auth0/edge";

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: locales[0],
  urlMappingStrategy: 'rewrite'
})

const isAuthPaths = ["/profile", "/cart", "/blog/new"];
const isAdminPaths = ["/admin"];

function isPathProtected(pathName: string, protectedPaths: string[]) {
  for (const path of protectedPaths) {
    if (pathName.startsWith(path)) {
      return true;
    }
  }
  return false;
}

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const session = await getSession(req, response);

  const pathName = req.nextUrl.pathname;

  if (!session?.user && isPathProtected(pathName, isAuthPaths)) return NextResponse.redirect(new URL('/api/auth/login', req.nextUrl));
  if (session?.user.app_metadata.role !== "admin" && isPathProtected(pathName, isAdminPaths)) return NextResponse.redirect(new URL('/', req.nextUrl));

  return I18nMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}