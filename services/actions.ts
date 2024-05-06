"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cookieExpirationOneYear } from "./utils";
import { getAnyData } from "./data-fetch/getAnyData";

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

export async function createUser(data: FormData) {
  const { name, email } = Object.fromEntries(data);
  await getAnyData<any>("http://localhost:3000/api/create-user", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });

  revalidatePath("/test")
}

export async function deleteUser(id: number) {
  await getAnyData<any>(`http://localhost:3000/api/delete-user/${id}`, {
    method: 'DELETE',
  });

  revalidatePath("/test")
}