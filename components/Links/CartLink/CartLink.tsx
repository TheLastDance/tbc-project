"use client"

import "./CartLink.css"
import Link from "next/link"
import { Cart } from "../../Icons/Cart"
import { useContext } from "react";
import { cartContext } from "@/services/providers/CartProvider"

interface IProps {
  onClick?: () => void;
}

export function CartLink({ onClick }: IProps) {
  const { cart } = useContext(cartContext);

  return <Link href="/cart" className="cartLink" onClick={onClick}>
    {cart.count > 0 && cart.count < 10 ? <span>{cart.count}</span> : cart.count > 9 ? <span>9+</span> : null}
    <Cart />
  </Link>
}
