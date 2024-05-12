"use client"
import "./CartList.css";
import { useContext } from "react";
import { cartContext } from "@/services/providers/CartProvider";
import { CartItem } from "./CartItem/CartItem";
import { Loader } from "../Loaders/Loader/Loader";


export function CartList() {
  const { cart, isMounted, handleResetCart } = useContext(cartContext);

  if (!isMounted) return <Loader />;

  return (
    <section className="cart_container">
      <div className="cart_items">
        {cart.count > 0 && <div>
          <h1>Shopping Cart</h1>
          <button type="button" onClick={handleResetCart}>RESET</button>
        </div>}
        {cart.count <= 0 && <p>Your cart is empty</p>}
        <ul>
          {cart.products.map((item) => <CartItem item={item} key={item.id} />)}
        </ul>
      </div>
      {
        cart.count > 0 && <div className="cart_info">
          <p>
            Items: <span>{cart.count}</span>
          </p>
          <p>
            Total: <span>{cart.price.toFixed(2)}$</span>
          </p>
          <button>Checkout</button>
        </div>
      }
    </section>
  )
}
