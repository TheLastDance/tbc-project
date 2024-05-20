"use client"

import "./CartLink.css"
import Link from "next/link"
import { Cart } from "../../Icons/Cart"
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic"

interface IProps {
  onClick?: () => void;
}

export function CartLink({ onClick }: IProps) {
  const { optimistic } = useCartOptimistic();

  return <Link href="/cart" className="cartLink" onClick={onClick}>
    {optimistic.count > 0 && optimistic.count < 10 ? <span>{optimistic.count}</span> : optimistic.count > 9 ? <span>9+</span> : null}
    <Cart />
  </Link>
}
