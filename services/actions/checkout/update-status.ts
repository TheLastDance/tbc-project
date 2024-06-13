"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { SuccessMessages } from "@/enums";

export async function updateStatus(id: number) {
  const session = await getSession();
  const isAdmin = session?.user.app_metadata.role === "admin";

  try {
    if (!isAdmin) throw new Error("You have no permission for that!");

    await sql`UPDATE orders SET status = NOT status WHERE id = ${id};`

    revalidatePath("/")
    return { message: SuccessMessages.UpdateOrderStatus }
  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}