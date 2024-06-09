"use client"

import "./DeleteProductButton.css"
import { PendingButton } from "../PendingButton/PendingButton"
import { Trash } from "@/components/Icons/Trash"
import { deleteProduct } from "@/services/actions/products/delete-product"
import toast from "react-hot-toast"

export function DeleteProductButton({ id, images }: { id: number, images: string[] }) {

  const handleDeleteProduct = async () => {
    const res = await deleteProduct(id, images);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });
  }

  return (
    <form action={handleDeleteProduct} className="deleteProductButton_container">
      <PendingButton mode="glitchHover" type="submit">
        <Trash />
      </PendingButton>
    </form>
  )
}
