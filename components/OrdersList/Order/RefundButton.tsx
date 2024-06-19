"use client"
import { PendingButton } from "@/components/Buttons/PendingButton/PendingButton"
import { requestRefund } from "@/services/actions/checkout/request-refund"
import toast from "react-hot-toast"

export function RefundButton({ id, payment_intent }: { id: number, payment_intent: string }) {

  const handleRefund = async () => {
    const res = await requestRefund(id, payment_intent, false);
    if (res?.error) toast.error(res.error, { duration: 5000 });
  }

  return (
    <form action={handleRefund}>
      <PendingButton type="submit" mode="glitchHover" translationKey="order.button.cancel" />
    </form>
  )
}
