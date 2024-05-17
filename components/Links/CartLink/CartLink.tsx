import "./CartLink.css"
import Link from "next/link"
import { Cart } from "../../Icons/Cart"

interface IProps {
  cart: IStorageCart,
  onClick?: () => void;
}

export async function CartLink({ cart, onClick }: IProps) {

  return <Link href="/cart" className="cartLink" onClick={onClick}>
    {cart.count > 0 && cart.count < 10 ? <span>{cart.count}</span> : cart.count > 9 ? <span>9+</span> : null}
    <Cart />
  </Link>
}
