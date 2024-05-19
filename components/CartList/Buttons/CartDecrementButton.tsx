"use client"
import { decrementCart } from "@/services/actions";
import { useTransition } from "react";

interface IProps {
  item: IProductItemCart,
  optimistic: IStorageCart,
  addOptimistic: (action: IStorageCart) => void,
}

export function CartDecrementButton({ item, optimistic, addOptimistic }: IProps) {
  const [, startTransition] = useTransition();

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
    <button type="button" onClick={handleDecrement}>-</button>
  )
}