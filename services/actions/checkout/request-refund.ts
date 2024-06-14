"use server"
import { getSession } from "@auth0/nextjs-auth0";
import { stripe } from "@/services/constants";
import { sql } from "@vercel/postgres";

export async function requestRefund(id: number, payment_intent: string, admin: boolean = false) {
  const session = await getSession();
  const user_id = session?.user.sub;
  const isAdmin = session?.user.app_metadata.role === "admin";

  try {
    if ((!isAdmin && admin) || !user_id) throw new Error("You have no permission for that!");


    if (!admin) {
      const { rows } = await sql`SELECT * FROM orders WHERE id = ${id};`
      if (rows[0].status) throw new Error("You can't cancel an order which is already shipped!");
    }

    await stripe.refunds.create({
      payment_intent: payment_intent,
      metadata: {
        order_id: id,
      }
    });

    return { message: "Refund requested" }

  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }

}