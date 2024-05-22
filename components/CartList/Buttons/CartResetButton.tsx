"use client"
import { Button } from "@/components/UI/Buttons/Button/Button";
import { resetCart } from "@/services/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";

export function CartResetButton() {
  const [, startTransition] = useTransition();
  const { addOptimistic } = useCartOptimistic();

  const handleReset = async () => {
    startTransition(() => addOptimistic({ count: 0, price: 0, products: [] }))
    await resetCart();
  }

  return (
    <Button
      type="button"
      onClick={handleReset}
      mode="glitchHover"
      translationKey="button.reset"
    />
  )
}
