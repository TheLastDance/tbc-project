"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cookieExpirationOneYear } from "./utils";

export async function login(data: FormData) {
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

  redirect("/");
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete("token");

  redirect("/login");
}

export async function setTranslateCookie(locale: Locale) {
  const cookieStore = cookies();

  cookieStore.set("Next-Locale", locale, { expires: cookieExpirationOneYear });
}