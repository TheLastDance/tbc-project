import "./CartItem.css";
import Link from "next/link";
import Image from "next/image";
import { CartDecrementButton } from "../Buttons/CartDecrementButton";
import { CartIncrementButton } from "../Buttons/CartIncrementButton";
import { CartDeleteButton } from "../Buttons/CartDeleteButton";

export function CartItem({ item }: { item: IProductItemCart }) {
  const { id, title, quantity, brand, price, images: [image] } = item;

  return (
    <li className="cartItem">
      <div className="cartItem_info_container">
        <Link href={`/products/${id}`}>
          <div className="cartItem_image">
            <Image src={image} alt={title} sizes="10rem" fill priority />
          </div>
        </Link>
        <div className="cartItem_info">
          <Link href={`/products/${id}`}>
            <h3>
              {title}
            </h3>
          </Link>
          <p>{brand}</p>
          <p>{price.toFixed(2)}$</p>
        </div>
      </div>
      <div className="cartItems_buttons">
        <CartIncrementButton item={item} mode="glitchHover">
          +
        </CartIncrementButton>
        <span>{quantity}</span>
        <CartDecrementButton item={item} />
      </div>
      <CartDeleteButton item={item} />
    </li>
  )
}
