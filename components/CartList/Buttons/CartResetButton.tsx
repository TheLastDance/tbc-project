"use client"
import { TranslateText } from "@/components/TranslateText/TranslateText";
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
    <button type="button" onClick={handleReset}>
      <TranslateText translationKey="button.reset" />
    </button>
  )
}
