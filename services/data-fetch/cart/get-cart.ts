import { cookies } from "next/headers";
import { BASE_URL } from "@/services/constants";

export const getCart = async () => {
  const res = await fetch(`${BASE_URL}/api/carts/get-cart`, {
    method: "GET",
    next: { tags: ["cart"] },
    headers: {
      "Content-Type": "application/json",
      "Cookie": `user_id=${JSON.parse(cookies().get("token")?.value!).id};`
    },
  });

  const cart: IStorageCart = await res.json();

  return cart;
}