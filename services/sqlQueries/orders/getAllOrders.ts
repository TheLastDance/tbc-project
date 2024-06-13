import { sql } from "@vercel/postgres";
import { QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';

export async function getAllOrders(): Promise<QueryResultRow> {
  noStore();

  try {
    const orders = await sql`
    SELECT  
      orders.*,
      users.picture AS user_picture,
      users.given_name AS user_given_name,
      users.family_name AS user_family_name,
      users.serial AS user_serial
    FROM 
      orders
    JOIN 
      users ON orders.user_id = users.id
    ORDER BY 
      orders.id DESC;
    `;

    return orders.rows;
  } catch (error) {
    console.log(error)
    return { error }
  }
}