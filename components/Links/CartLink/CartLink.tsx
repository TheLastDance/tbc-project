"use client"

import "./CartLink.css"
import Link from "next/link"
import { Cart } from "../../Icons/Cart"
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic"

interface IProps {
  onClick?: () => void;
}

export function CartLink({ onClick }: IProps) {
  const { optimistic, isAdding } = useCartOptimistic();

  return <Link title="cart" href="/cart" className="cartLink" onClick={onClick} style={isAdding ? { pointerEvents: "none" } : undefined}>
    {optimistic.count > 0 && optimistic.count < 10 ? <span>{optimistic.count}</span> : optimistic.count > 9 ? <span>9+</span> : null}
    <Cart />
  </Link>
}
