import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getOrder(id: number): Promise<QueryResultRow> {
  noStore();

  try {
    const order = await sql`SELECT * FROM orders WHERE orders.id = ${id};`;

    return order.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}