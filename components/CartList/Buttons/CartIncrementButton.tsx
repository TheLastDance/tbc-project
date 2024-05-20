"use client"
import { incrementCart } from "@/services/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";

interface IProps {
  children: React.ReactNode,
  item: IProductItemCart | IProductItem,
}

export function CartIncrementButton({ children, item }: IProps) {
  const [, startTransition] = useTransition();
  const { optimistic, addOptimistic } = useCartOptimistic();

  const handleIncrement = async () => {
    if (addOptimistic && optimistic) {
      startTransition(() => {
        const newCart = {
          count: optimistic.count + 1,
          price: optimistic.price + item.price,
          products: optimistic.products.map(p => p.id === item.id ? ({ ...p, quantity: p.quantity + 1 }) : ({ ...p })),
        }
        return addOptimistic(newCart)
      })
    }
    await incrementCart(item.id);
  }

  return (
    <button type="button" onClick={handleIncrement}>{children}</button>
  )
}

