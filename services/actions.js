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

  if (!response.ok) return "Invalid data";

  const user = await response.json();
  const cookieStore = cookies();
  cookieStore.set("token", user.token, { httpOnly: true });
  redirect("/")

  //return res;
}