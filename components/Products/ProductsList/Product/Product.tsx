"use client"

import "./Product.css";
import { Card } from "@/components/Card/Card";
// import { useContext } from "react";
// import { cartContext } from "@/services/providers/CartProvider";
import Link from "next/link";
import Image from "next/image";
import { TranslateText } from "@/components/TranslateText/TranslateText";
import { incrementCart } from "@/services/actions";
// import { createCart } from "@/services/data-fetch/cart/create-cart";

interface IProps {
  item: IProductItem;
  index: number;
}

export function Product({ item, index }: IProps) {
  // const { handleAddToCart } = useContext(cartContext);
  const {
    title,
    description,
    id,
    images: [image],
  } = item;

  const handleIncrement = async () => {
    await incrementCart(id);
  }

  return (
    <Card>
      <Link href={`/products/${id}`}>{title}</Link>
      <Image
        src={image}
        alt={title}
        width={400}
        height={650}
        // approximately only 6 images will be above the fold in future, so I need priority only for them
        priority={index < 6}
      />
      <div className="productDescription_container">
        <p>{description}</p>
      </div>
      <button type="button" onClick={handleIncrement}>
        <TranslateText translationKey="button.addToCart" />
      </button>
    </Card>
  );
}
