import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getProducts(): Promise<QueryResultRow> {
  noStore();

  try {
    const products = await sql`SELECT 
    products.*, 
    COALESCE(AVG(productrating.point), 0) AS average
      FROM 
    products
      LEFT JOIN 
    productrating 
      ON 
    products.id = productrating.product_id
      GROUP BY 
    products.id
      ORDER BY 
    products.id DESC;`;
    return products.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}