"use client"
import { Button } from "@/components/UI/Buttons/Button/Button"
import { useToggle } from "@/services/hooks/useToggle";
import { CheckoutModal } from "@/components/Modals/CheckoutModal/CheckoutModal";


export function CheckoutButton() {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  return (
    <>
      <Button type="button" translationKey="button.checkout" mode="glitch" onClick={setToggleTrue} />
      {toggle && <CheckoutModal setToggleFalse={setToggleFalse} />}
    </>
  )
}
