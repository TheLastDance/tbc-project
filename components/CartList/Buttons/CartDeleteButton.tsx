"use client"
import { deleteCartItem } from "@/services/actions";
import { Close } from "@/components/Icons/Close";

export function CartDeleteButton({ id }: { id: number }) {

  const handleDeleteCartItem = async () => {
    await deleteCartItem(id);
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
