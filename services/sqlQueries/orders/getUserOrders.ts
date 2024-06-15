import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { getSession } from "@auth0/nextjs-auth0";

export async function getUserOrders(): Promise<QueryResultRow> {
  noStore();
  const session = await getSession();
  const user_id = session?.user.sub;

  try {
    const orders = await sql`SELECT * FROM orders WHERE orders.user_id = ${user_id} ORDER BY orders.id DESC;`;

    return orders.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}