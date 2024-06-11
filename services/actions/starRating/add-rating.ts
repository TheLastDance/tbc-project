"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";


export async function addRating(value: number, id: number) {
  const session = await getSession();
  const user_id = session?.user.sub;
  if (!user_id) redirect("/api/auth/login");

  try {

    const { rows } = await sql`SELECT * FROM productrating WHERE user_id = ${user_id} AND product_id = ${id};`

    if (rows.length) {
      if (rows[0].point !== value) {
        await sql`UPDATE productrating SET point = ${value} WHERE product_id = ${id} AND user_id = ${user_id};`
        return { message: "Thank you for your rating!" }
      }
    } else {
      await sql`INSERT INTO productrating (user_id, product_id, point) VALUES (${user_id},${id},${value});`
      return { message: "Thank you for your rating!" }
    }

    revalidatePath("/");
    return { message: "" }
  } catch (error) {
    console.log(error);
    return { error }
  }

}