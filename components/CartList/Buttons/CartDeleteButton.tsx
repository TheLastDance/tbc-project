"use client"
import { deleteCartItem } from "@/services/actions";
import { Close } from "@/components/Icons/Close";
import { useTransition } from "react";

interface IProps {
  item: IProductItemCart,
  optimistic: IStorageCart,
  addOptimistic: (action: IStorageCart) => void,
}

export function CartDeleteButton({ item, optimistic, addOptimistic }: IProps) {
  const [, startTransition] = useTransition();

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
