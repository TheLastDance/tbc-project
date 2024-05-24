import { BASE_URL } from "@/services/constants";
import { getSession } from "@auth0/nextjs-auth0";

export const getCart = async () => {
  const user = await getSession();

  const res = await fetch(`${BASE_URL}/api/carts/get-cart`, {
    method: "GET",
    next: { tags: ["cart"] },
    headers: {
      "Content-Type": "application/json",
      "Cookie": `user_id=${user!.user.sub};`
    },
  });

  const cart: IStorageCart = await res.json();

  return cart;
}