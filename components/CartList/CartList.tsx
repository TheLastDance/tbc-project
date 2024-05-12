"use client"
import { useContext } from "react"
import { cartContext } from "@/services/providers/CartProvider";
import Link from "next/link";

export function CartList() {
  const { cart, handleAddToCart, handleRemoveFromCart, handleDeleteFromCart, handleResetCart } = useContext(cartContext);

  return (
    <ul>
      <button type="button" onClick={handleResetCart}>RESET CART</button>
      {cart.products.map((item) => <li key={item.id}>
        <Link href={`/products/${item.id}`}>{item.title}</Link>
        <button type="button" onClick={() => handleAddToCart(item)}>+</button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => handleRemoveFromCart(item)}>-</button>
        <button type="button" onClick={() => handleDeleteFromCart(item)}>DELETE</button>
      </li>)}
    </ul>
  )
}
