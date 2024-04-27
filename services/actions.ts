"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cookieExpirationOneYear } from "./utils";
import { locales } from "@/i18n.config";

// export async function login(_, data) {
//   const { username, password } = Object.fromEntries(data);

//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   });

//   const user = await response.json();

//   if (!response.ok) return user.message;

//   const cookieStore = cookies();
//   cookieStore.set("token", user.token, { httpOnly: true, expires: cookieExpirationOneYear }); // will use typescript enums in future, thats why I have no constant for token string
//   redirect("/");

// }

export async function logout() {
  const cookieStore = cookies();
  const locale = getLocale();
  cookieStore.delete("token");

  redirect(`${locale}/login`);
}

export async function setTranslateCookie(locale: Locale, path: string) {
  const cookieStore = cookies();

  cookieStore.set("locale", locale, { expires: cookieExpirationOneYear });

  redirect(path);
}

export const getLocale = () => {
  const locale = cookies().get("locale")?.value as Locale | undefined;

  return !locale ? locales[0] : locale;
} // returns preferable localization for user based on cookie.