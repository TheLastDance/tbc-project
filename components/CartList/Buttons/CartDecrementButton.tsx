"use client"
import { decrementCart } from "@/services/actions";

export function CartDecrementButton({ id }: { id: number }) {

  const handleDecrement = async () => {
    await decrementCart(id);
  }

  return (
    <button type="button" onClick={handleDecrement}>-</button>
  )
}