import Stripe from "stripe";
import { stripe } from "@/services/constants";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getProducts } from "@/services/sqlQueries/products/getProducts";
import { buildCartInfo } from "@/services/utils";

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

    if (session.metadata?.user_id && session?.payment_intent) {
      const payment_intent = session.payment_intent as string;

      // const res = await stripe.refunds.create({ payment_intent: payment_intent }); // refund
      // console.log(res)

      // const id = session.metadata.user_id;
      // await sql`INSERT INTO test (user_id) VALUES (${id})`

      //CHANGE getCart method to fully server action!!!

      const id = session.metadata.user_id;
      const { rows } = await sql`SELECT * FROM carts WHERE user_id = ${id}` // retrieve from cart
      const products = await getProducts() as IProductItem[];
      const cart = rows[0].products;

      const info = buildCartInfo(cart, products);

      await sql`
      INSERT INTO orders (user_id,payment_intent,products) 
      VALUES (${id},${payment_intent},${JSON.stringify(info)})
      ` // status row should be false by default. insert into orders

      await sql`UPDATE carts SET products = ${JSON.stringify([])} WHERE user_id = ${id};`; //reset cart
      return new NextResponse("Order was created", { status: 200 })
    } else {
      return new NextResponse("No user_id", { status: 400 })
    }

  }


  // if (event.type === "refund.created") {
  //   const id = session.metadata!.user_id; // pass on refund created
  //   await sql`UPDATE test SET refund=${"refund requested"} WHERE user_id = ${id}`
  //   return new NextResponse("refund requested", { status: 200 })
  // }

  // if (event.type === "refund.updated") {
  //   const payment_intent = session.payment_intent as string; // need to check if we will retrieve this
  //   await sql`UPDATE test SET refund=${"successfully refunded"} WHERE payment_intent = ${payment_intent}`
  //   return new NextResponse("successfully refunded", { status: 200 })
  // }

  return new NextResponse("OK", { status: 200 })

}