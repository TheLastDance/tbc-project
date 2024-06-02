"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { cookieExpirationOneYear } from "./utils";
import { getAnyData } from "./data-fetch/getAnyData";
import { BASE_URL } from "./constants";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";

export async function setTranslateCookie(locale: Locale) {
  const cookieStore = cookies();

  cookieStore.set("Next-Locale", locale, { expires: cookieExpirationOneYear });
}

export async function editUser(data: FormData, id: number) {
  const { given_name, family_name, birth_date } = Object.fromEntries(data);

  try {
    if (!given_name || !family_name || !id) throw new Error('name, email names required');
    await sql`UPDATE users SET given_name = ${`${given_name}`}, family_name = ${`${family_name}`}, birth_date = ${`${birth_date}`} WHERE id = ${id};`;
  } catch (error) {
    console.log(error)
  }

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