"use client"
import { incrementCart } from "@/services/actions";

export function CartIncrementButton({ children, id }: { children: React.ReactNode, id: number }) {

  const handleIncrement = async () => {
    await incrementCart(id);
  }

  return (
    <button type="button" onClick={handleIncrement}>{children}</button>
  )
}

