"use client"

import "./CartList.css";
import { CartItem } from "./CartItem/CartItem";
import { TranslateText } from "../TranslateText/TranslateText";
import { CartResetButton } from "./Buttons/CartResetButton";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";
import { Button } from "../UI/Buttons/Button/Button";
import { stripeCheckout } from "@/services/actions/checkout/stripeCheckout";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

const getStripe = async () => await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export function CartList() {
  const { optimistic } = useCartOptimistic();

  const handleCheckout = async () => {
    const res = await stripeCheckout();
    const stripe = await getStripe();
    if (res?.result) {
      stripe?.redirectToCheckout({ sessionId: res.result })
    }

    if (res?.error) toast.error(res.error);
  }

  return (
    <section className="cart_container">
      <div className="cart_items">

        {optimistic.count > 0 &&
          <div>
            <Heading level={1} translationKey="cart.heading" />
            <CartResetButton />
          </div>
        }

        {optimistic.count <= 0 && <p><TranslateText translationKey="cart.emptyMessage" /></p>}

        <ul>
          {optimistic.products.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>

      </div>
      {optimistic.count > 0 &&
        <div className="cart_info capitalize">
          <p>
            <TranslateText translationKey="cart.items" />: <span>{optimistic.count}</span>
          </p>
          <p>
            <TranslateText translationKey="cart.total" />: <span>{optimistic.price.toFixed(2)}$</span>
          </p>

          <Button type="button" translationKey="button.checkout" mode="glitch" onClick={handleCheckout} />
        </div>
      }
    </section>
  )
}
