"use client"
import { useContext } from "react";
import { cartContext } from "@/services/providers/CartProvider";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps {
  item: IProductItem
}

export function FullProductAddToCartButton({ item }: IProps) {
  const { handleAddToCart } = useContext(cartContext);

  return (
    <button type="button" onClick={() => handleAddToCart(item)}>
      <TranslateText translationKey="button.addToCart" />
    </button>
  )
}
