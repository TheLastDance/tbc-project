import { NextRequest } from "next/server";
import { locales } from "./i18n.config";
import { createI18nMiddleware } from 'next-international/middleware'

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: locales[0],
  urlMappingStrategy: 'rewrite'
})

// const loginPathsWithLocales = getPathWithLocales(locales, "/login");

export function middleware(req: NextRequest): Response {
  // const pathName = req.nextUrl.pathname;
  // const token = req.cookies.get("token")?.value;

  // // will add check for not private routes here if we need it in future
  // if (!loginPathsWithLocales.includes(pathName) && !token) return NextResponse.redirect(new URL('/login', req.nextUrl));

  // if (loginPathsWithLocales.includes(pathName) && token) return NextResponse.redirect(new URL('/', req.nextUrl));

  return I18nMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}