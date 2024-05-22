"use client"
import { decrementCart } from "@/services/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";
import { Button } from "@/components/UI/Buttons/Button/Button";

export function CartDecrementButton({ item }: { item: IProductItemCart }) {
  const [, startTransition] = useTransition();
  const { optimistic, addOptimistic } = useCartOptimistic();

  const handleDecrement = async () => {
    startTransition(() => {
      const newProducts = item.quantity <= 1 ?
        optimistic.products.filter(p => p.id !== item.id) :
        optimistic.products.map(p => p.id === item.id ? ({ ...p, quantity: p.quantity - 1 }) : ({ ...p }));

      return addOptimistic({ count: optimistic.count - 1, price: optimistic.price - item.price, products: newProducts });
    })
    await decrementCart(item.id);
  }

  return (
    <Button type="button" onClick={handleDecrement} mode="glitchHover">-</Button>
  )
}