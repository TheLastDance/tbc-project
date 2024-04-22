"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(_, data) {
  const { username, password } = Object.fromEntries(data);

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const user = await response.json();

  if (!response.ok) return user.message;

  const cookieStore = cookies();
  cookieStore.set("token", user.token, { httpOnly: true }); // will use typescript enums in future, thats why I have no constant for token string
  redirect("/");

}

export async function logout() {
  const cookieStore = cookies();

  cookieStore.delete("token");

  redirect("/login");
}

export async function setTranslateCookie(locale, path) {
  const cookieStore = cookies();

  cookieStore.set("locale", locale);

  redirect(path);
}