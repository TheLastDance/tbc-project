"use client"

import "./CartLink.css"
import Link from "next/link"
import { Cart } from "../../Icons/Cart"
import { useContext } from "react";
import { cartContext } from "@/services/providers/CartProvider"

export function CartLink() {
  const { cart } = useContext(cartContext);

  return <Link href="/cart" className="cartLink">
    {cart.count > 0 && <span>{cart.count}</span>}
    <Cart />
  </Link>
}
