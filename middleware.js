import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const loginPath = "/login";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (path !== loginPath && !token) return NextResponse.redirect(new URL('/login', req.nextUrl));

  if (path === loginPath && token) return NextResponse.redirect(new URL('/', req.nextUrl));

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/products/:id*', '/blog/:id*', '/contact', '/profile', '/login'],
}