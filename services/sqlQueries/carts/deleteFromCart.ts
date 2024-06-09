import { sql } from "@vercel/postgres";

export async function deleteFromCart(id: number) {
  try {

    await sql`
    UPDATE carts
    SET products = COALESCE(
    (
        SELECT jsonb_agg(elem)
        FROM jsonb_array_elements(carts.products) AS elem
        WHERE (elem->>'id')::INT != ${id}
    ), '[]'::jsonb
    ) 
    WHERE EXISTS (
    SELECT 1
    FROM jsonb_array_elements(carts.products) AS elem
    WHERE (elem->>'id')::INT = ${id}
    );
    `

  } catch (error) {
    console.log(error)
  }
}
