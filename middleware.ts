import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { IMiddlewareConfig } from "./typesLuka";

const loginPath = "/login";

export function middleware(req: NextRequest): Response {
  const path: string = req.nextUrl.pathname;

  const cookieStore = cookies();
  const token: string | undefined = cookieStore.get("token")?.value;

  if (path !== loginPath && !token) return NextResponse.redirect(new URL('/login', req.nextUrl));

  if (path === loginPath && token) return NextResponse.redirect(new URL('/', req.nextUrl));

  return NextResponse.next();
}

export const config: IMiddlewareConfig = {
  matcher: ['/', '/products/:id*', '/blog/:id*', '/contact', '/profile', '/login'],
}