"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cookieExpirationOneYear } from "./utils";
import { locales } from "@/i18n.config";
import { getLocaleFromPath } from "./utils";

export async function login(data: FormData, path: string) {
  const { username, password } = Object.fromEntries(data);

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const user = await response.json();

  if (!response.ok) return user;

  const cookieStore = cookies();
  cookieStore.set("token", user.token, { httpOnly: true, expires: cookieExpirationOneYear }); // will use typescript enums in future, thats why I have no constant for token string

  const locale = getLocaleFromPath(path);
  redirect(`/${locale}`);
}

export async function logout(path: string) {
  const cookieStore = cookies();
  const locale = getLocaleFromPath(path);
  cookieStore.delete("token");

  redirect(`/${locale}/login`);
}

export async function setTranslateCookie(locale: Locale) {
  const cookieStore = cookies();

  cookieStore.set("locale", locale, { expires: cookieExpirationOneYear });
}

export const getLocale = () => {
  const locale = cookies().get("locale")?.value as Locale | undefined;

  return !locale ? locales[0] : locale;
} // returns preferable localization for user based on cookie.