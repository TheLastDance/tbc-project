import { BASE_URL } from "@/services/constants";

export const createCart = async (item_id: number, user_id: string) => {
  const res = await fetch(`${BASE_URL}/api/carts/create-cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': `user_id=${user_id};`,
    },
    body: JSON.stringify({ item_id })
  });

  const json = await res.json();

  return json;
};