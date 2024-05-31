import { NextRequest, NextResponse } from "next/server";
import { locales } from "./i18n.config";
import { createI18nMiddleware } from 'next-international/middleware'
import { getSession } from "@auth0/nextjs-auth0/edge";

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: locales[0],
  urlMappingStrategy: 'rewrite'
})

function isPathProtected(pathName: string) {
  const protectedRoutes = ["/profile", "/cart", "/contact", "/blog", "/products", "/admin"]

  for (const route of protectedRoutes) {
    if (pathName.startsWith(route) || pathName === "/") {
      return true;
    }
  }
  return false;
}

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const session = await getSession(req, response);

  const pathName = req.nextUrl.pathname;

  if (!session?.user && isPathProtected(pathName)) return NextResponse.redirect(new URL('/api/auth/login', req.nextUrl));

  return I18nMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}