"use client"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton"
import { AreYouSureModal } from "@/components/Modals/AreYouSureModal/AreYouSureModal"
import { requestRefund } from "@/services/actions/checkout/request-refund"
import { AnimatePresence } from "framer-motion"
import toast from "react-hot-toast"
import { useToggle } from "@/services/hooks/useToggle"
import { Button } from "@/components/UI/Buttons/Button/Button"

export function RefundButton({ id, payment_intent }: { id: number, payment_intent: string }) {
  const { toggle, setToggleFalse, setToggleTrue } = useToggle();

  const handleRefund = async () => {
    const res = await requestRefund(id, payment_intent, false);
    if (res?.error) toast.error(res.error, { duration: 5000 });
    setToggleFalse();
  }

  return (
    <>
      <Button mode="glitchHover" type="button" onClick={setToggleTrue} translationKey="order.button.cancel" />

      <AnimatePresence>
        {toggle && <AreYouSureModal setToggleFalse={setToggleFalse} >
          <form action={handleRefund}>
            <PendingButton loader mode="glitchHover" type="submit" translationKey="yes" />
          </form>
        </AreYouSureModal>}
      </AnimatePresence>
    </>
  )
}
