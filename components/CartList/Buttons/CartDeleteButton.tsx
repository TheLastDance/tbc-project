"use client"
import { deleteCartItem } from "@/services/actions";
import { Close } from "@/components/Icons/Close";
import { useTransition } from "react";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";

export function CartDeleteButton({ item }: { item: IProductItemCart }) {
  const [, startTransition] = useTransition();
  const { optimistic, addOptimistic } = useCartOptimistic();

  const handleDeleteCartItem = async () => {
    startTransition(() => {
      const newCart = {
        count: optimistic.count - item.quantity,
        price: optimistic.price - item.quantity * item.price,
        products: optimistic.products.filter(p => p.id !== item.id),
      }
      return addOptimistic(newCart);
    })
    await deleteCartItem(item.id);
  }

  return (
    <button
      type="button"
      className="resetButtonStyles cartItem_deleteButton"
      onClick={handleDeleteCartItem}
    >
      <Close />
    </button>
  )
}
