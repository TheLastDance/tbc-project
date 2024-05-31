"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cookieExpirationOneYear } from "./utils";
import { getAnyData } from "./data-fetch/getAnyData";
import { BASE_URL } from "./constants";
import { getSession } from "@auth0/nextjs-auth0";

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
  cookieStore.set("token", JSON.stringify(user), { httpOnly: true, expires: cookieExpirationOneYear }); // will use typescript enums in future, thats why I have no constant for token string

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

export async function editUser(data: FormData, id: number) {
  const { given_name, family_name, birth_date } = Object.fromEntries(data);
  await getAnyData<IUserDatabase>(`${BASE_URL}/api/edit-user/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ given_name, family_name, birth_date })
  });

  revalidatePath("/admin")
}

async function updateCart(apiUrl: string, item_id: number) {
  const user = await getSession();

  await getAnyData(`${BASE_URL}/api/carts/${apiUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `user_id=${user!.user.sub};`,
    },
    body: JSON.stringify({ item_id })
  });
}

export async function incrementCart(item_id: number) {
  await updateCart("update-cart", item_id);
  revalidateTag("cart")
}

export async function decrementCart(item_id: number) {
  await updateCart("decrement-cart", item_id);
  revalidateTag("cart")
}

export async function deleteCartItem(item_id: number) {
  await updateCart("delete-cart-item", item_id);
  revalidateTag("cart")
}

export async function resetCart() {
  const user = await getSession();

  await getAnyData(`${BASE_URL}/api/carts/reset-cart`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `user_id=${user!.user.sub};`,
    }
  });

  revalidateTag("cart")
}