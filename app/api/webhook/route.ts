import Stripe from "stripe";
import { stripe } from "@/services/constants";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {

    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);

  } catch (error) {
    return new NextResponse("Invalid Signature!", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {

    if (session.metadata?.user_id) {
      const id = session.metadata.user_id;
      await sql`INSERT INTO test (user_id) VALUES (${id})`
      // const { rows } = await sql`SELECT * FROM carts WHERE user_id = ${id}`


    }

    return new NextResponse("No user_id", { status: 400 })
  }

  return new NextResponse("OK", { status: 200 })

}