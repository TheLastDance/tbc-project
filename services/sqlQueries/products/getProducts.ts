import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getProducts(): Promise<QueryResultRow> {
  noStore();

  try {
    const products = await sql`SELECT * FROM products ORDER BY products.id DESC;`;
    return products.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}