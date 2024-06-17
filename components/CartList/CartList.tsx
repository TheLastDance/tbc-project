"use client"

import "./CartList.css";
import { CartItem } from "./CartItem/CartItem";
import { TranslateText } from "../TranslateText/TranslateText";
import { CartResetButton } from "./Buttons/CartResetButton";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";
import { Heading } from "../UI/GlitchEffects/Heading/Heading";
import { CheckoutButton } from "./Buttons/CheckoutButton";

export function CartList() {
  const { optimistic } = useCartOptimistic();

  return (
    <section className="cart_container">
      <div className="cart_items">

        {optimistic.count > 0 &&
          <div>
            <h1><Heading translationKey="cart.heading" /></h1>
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

          <CheckoutButton />
        </div>
      }
    </section>
  )
}
