import { NextRequest, NextResponse } from "next/server";
import { locales } from "./i18n.config";
import { getPathWithLocales } from "./services/utils";
import { getLocale } from "./services/actions";

const loginPathsWithLocales = getPathWithLocales(locales, "/login");

export function middleware(req: NextRequest): Response {
  const pathName = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value;

  if (!loginPathsWithLocales.includes(pathName) && !token) return NextResponse.redirect(new URL('/login', req.nextUrl));

  if (loginPathsWithLocales.includes(pathName) && token) return NextResponse.redirect(new URL('/', req.nextUrl));

  const pathnameIsMissingLocale = locales.every(
    locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale();
    const newPath = `/${locale}${pathName.startsWith('/') ? '' : '/'}${pathName}`;
    return NextResponse.redirect(new URL(newPath, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}