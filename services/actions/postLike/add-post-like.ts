"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";


export async function addPostLike(id: number) {
  const session = await getSession();
  const user_id = session?.user.sub;
  if (!user_id) redirect("/api/auth/login");

  try {

    await sql`
      INSERT INTO postslikes (user_id, post_id, isliked)
      VALUES (${user_id}, ${id}, TRUE)
      ON CONFLICT (user_id, post_id)
      DO UPDATE SET isliked = NOT postslikes.isliked;
    `

    revalidatePath("/");
    return { message: "" }
  } catch (error) {
    console.log(error);
    return { error }
  }

}