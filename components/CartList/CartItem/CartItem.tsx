"use client"
import "./CartItem.css";
import { useContext } from "react"
import { cartContext } from "@/services/providers/CartProvider";
import Link from "next/link";
import Image from "next/image";
import { Close } from "@/components/Icons/Close";

interface IProps {
  item: IProductItemCart
}

export function CartItem({ item }: IProps) {
  const { handleAddToCart, handleRemoveFromCart, handleDeleteFromCart } = useContext(cartContext);
  const { id, title, thumbnail, quantity, brand, price } = item;

  return (
    <li className="cartItem">
      <div className="cartItem_info_container">
        <Link href={`/products/${id}`}>
          <div className="cartItem_image">
            <Image src={thumbnail} alt={title} sizes="10rem" fill priority />
          </div>
        </Link>
        <div className="cartItem_info">
          <Link href={`/products/${id}`}>
            <h3>
              {title}
            </h3>
          </Link>
          <p>{brand}</p>
          <p>{price}$</p>
        </div>
      </div>
      <div className="cartItems_buttons">
        <button type="button" onClick={() => handleAddToCart(item)}>+</button>
        <span>{quantity}</span>
        <button type="button" onClick={() => handleRemoveFromCart(item)}>-</button>
      </div>
      <button
        type="button"
        className="resetButtonStyles cartItem_deleteButton "
        onClick={() => handleDeleteFromCart(item)}
      >
        <Close />
      </button>
    </li>
  )
}
