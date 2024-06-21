"use client"
import { Button } from "@/components/UI/Buttons/Button/Button"
import { useToggle } from "@/services/hooks/useToggle";
import { CheckoutModal } from "@/components/Modals/CheckoutModal/CheckoutModal";
import { AnimatePresence } from "framer-motion";


export function CheckoutButton() {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return (
    <>
      <Button type="button" translationKey="button.checkout" mode="glitch" onClick={setToggleTrue} />
      <AnimatePresence>
        {toggle && <CheckoutModal setToggleFalse={setToggleFalse} />}
      </AnimatePresence>
    </>
  )
}
