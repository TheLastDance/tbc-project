"use server"
import { getSession } from "@auth0/nextjs-auth0";
import { del } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { SuccessMessages } from "@/enums";

export async function deleteProduct(id: number, images: string[]) {
  const session = await getSession();
  const isAdmin = session?.user.app_metadata.role === "admin";

  try {
    if (!isAdmin) throw new Error("You have no permission for that!");

    for (const image of images) {
      await del(image);
    }

    await sql`DELETE FROM products WHERE id = ${id};`;

    revalidatePath("/")
    return { message: SuccessMessages.DeleteProduct }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}