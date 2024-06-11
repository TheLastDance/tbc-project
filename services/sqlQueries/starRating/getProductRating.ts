import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { getSession } from "@auth0/nextjs-auth0";

export async function getProductRating(id: number): Promise<QueryResultRow> {
  noStore();
  const session = await getSession();
  const user_id = session?.user.sub;

  try {

    if (user_id) {
      const { rows } = await sql`SELECT 
      SUM(point) AS total_points,
      AVG(point) AS average_points,
      COUNT(*) AS rating_count,
      MAX(CASE 
          WHEN user_id = ${user_id} THEN 1
          ELSE 0
      END) AS user_exists,
      MAX(CASE 
          WHEN user_id = ${user_id} THEN point
          ELSE NULL
      END) AS user_point
      FROM productrating
      WHERE product_id = ${id};`

      return rows[0]

    } else {
      const { rows } = await sql`SELECT 
      SUM(point) AS total_points,
      AVG(point) AS average_points,
      COUNT(*) AS rating_count
      FROM productrating
      WHERE product_id = ${id};`

      return rows[0];
    }
  } catch (error) {
    console.log(error)
    return { error }
  }
}