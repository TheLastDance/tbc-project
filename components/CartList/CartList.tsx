"use client"
import "./CartList.css";
import { useContext } from "react";
import { cartContext } from "@/services/providers/CartProvider";
import { CartItem } from "./CartItem/CartItem";
import { Loader } from "../Loaders/Loader/Loader";
import { TranslateText } from "../TranslateText/TranslateText";


export function CartList() {
  const { cart, isMounted, handleResetCart } = useContext(cartContext);

  if (!isMounted) return <Loader />;

  return (
    <section className="cart_container">
      <div className="cart_items">

        {cart.count > 0 &&
          <div>
            <h1 className="capitalize">
              <TranslateText translationKey="cart.heading" />
            </h1>
            <button type="button" onClick={handleResetCart}>
              <TranslateText translationKey="button.reset" />
            </button>
          </div>
        }

        {cart.count <= 0 && <p><TranslateText translationKey="cart.emptyMessage" /></p>}

        <ul>
          {cart.products.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>

      </div>
      {cart.count > 0 &&
        <div className="cart_info capitalize">
          <p>
            <TranslateText translationKey="cart.items" />: <span>{cart.count}</span>
          </p>
          <p>
            <TranslateText translationKey="cart.total" />: <span>{cart.price.toFixed(2)}$</span>
          </p>
          <button type="button">
            <TranslateText translationKey="button.checkout" />
          </button>
        </div>
      }
    </section>
  )
}
