"use server"
import { getSession } from "@auth0/nextjs-auth0";
import Stripe from "stripe";
import { stripe } from "@/services/constants";
import { BASE_URL } from "@/services/constants";
import { getCart } from "@/services/data-fetch/cart/get-cart";


export async function stripeCheckout(data: FormData) {
  const session = await getSession();
  const user_id = session?.user.sub;
  const { region, city, address } = Object.fromEntries(data);


  try {
    if (!user_id) throw new Error("something went wrong!");
    if (!region || !address || !city) throw new Error("All fields are required!");

    const cart = await getCart();
    const data = cart.products.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          description: item.description,
          images: item.images
        },
        unit_amount: +item.price * 100,
      },
      quantity: item.quantity,
    }))

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      payment_method_types: ["card"],
      mode: "payment",
      line_items: data,
      metadata: {
        user_id: user_id,
        region: `${region}`,
        city: `${city}`,
        address: `${address}`,
      },
      success_url: `${BASE_URL}/success/order`,
      cancel_url: `${BASE_URL}/`,
    };

    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

    return { result: `${checkoutSession.id}` };

  } catch (error) {
    console.log(error)
    return { error: (error as Error).message }
  }
}