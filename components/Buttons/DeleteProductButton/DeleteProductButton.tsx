"use client"

import "./DeleteProductButton.css"
import { useToggle } from "@/services/hooks/useToggle"
import { PendingButton } from "../PendingButton/PendingButton"
import { Trash } from "@/components/Icons/Trash"
import { deleteProduct } from "@/services/actions/products/delete-product"
import toast from "react-hot-toast"
import { Button } from "@/components/UI/Buttons/Button/Button"
import { AreYouSureModal } from "@/components/Modals/AreYouSureModal/AreYouSureModal"
import { AnimatePresence } from "framer-motion"

export function DeleteProductButton({ id, images }: { id: number, images: string[] }) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  const handleDeleteProduct = async () => {
    const res = await deleteProduct(id, images);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    if (res?.message) toast.success(res.message, { duration: 5000 });
    setToggleFalse();
  }

  return (
    <>
      <div className="deleteProductButton_container">
        <Button mode="glitchHover" type="button" onClick={setToggleTrue}>
          <Trash />
        </Button>
      </div>

      <AnimatePresence>
        {toggle && <AreYouSureModal setToggleFalse={setToggleFalse} >
          <form action={handleDeleteProduct}>
            <PendingButton loader mode="glitchHover" type="submit" translationKey="yes" />
          </form>
        </AreYouSureModal>}
      </AnimatePresence>
    </>
  )
}
