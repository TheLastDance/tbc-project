"use client"
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { resetCart } from "@/services/actions";
import { useTransition } from "react";

export function CartResetButton({ addOptimistic }: { addOptimistic: (action: IStorageCart) => void }) {
  const [, startTransition] = useTransition();

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
