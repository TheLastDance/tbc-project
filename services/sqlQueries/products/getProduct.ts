import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getProduct(id: number): Promise<QueryResultRow> {
  noStore();

  try {
    const product = await sql`SELECT * FROM products WHERE products.id = ${id};`;
    return product.rows[0];
  } catch (error) {
    console.log(error)
    return { error }
  }
}