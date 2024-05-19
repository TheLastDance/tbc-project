"use client"

import "./CartList.css";
import { CartItem } from "./CartItem/CartItem";
import { TranslateText } from "../TranslateText/TranslateText";
import { CartResetButton } from "./Buttons/CartResetButton";
import { useOptimistic } from "react";

export function CartList({ cart }: { cart: IStorageCart }) {
  const [optimistic, addOptimistic] = useOptimistic<IStorageCart, IStorageCart>(cart, (state, newCart) => ({ ...state, ...newCart }))

  return (
    <section className="cart_container">
      <div className="cart_items">

        {optimistic.count > 0 &&
          <div>
            <h1 className="capitalize">
              <TranslateText translationKey="cart.heading" />
            </h1>
            <CartResetButton addOptimistic={addOptimistic} />
          </div>
        }

        {optimistic.count <= 0 && <p><TranslateText translationKey="cart.emptyMessage" /></p>}

        <ul>
          {optimistic.products.map((item) => <CartItem item={item} optimistic={optimistic} addOptimistic={addOptimistic} key={item.id} />)}
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
          <button type="button">
            <TranslateText translationKey="button.checkout" />
          </button>
        </div>
      }
    </section>
  )
}
