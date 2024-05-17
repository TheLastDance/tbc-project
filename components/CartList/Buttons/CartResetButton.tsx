"use client"
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { resetCart } from "@/services/actions";

export function CartResetButton() {

  const handleReset = async () => {
    await resetCart();
  }

  return (
    <button type="button" onClick={handleReset}>
      <TranslateText translationKey="button.reset" />
    </button>
  )
}
