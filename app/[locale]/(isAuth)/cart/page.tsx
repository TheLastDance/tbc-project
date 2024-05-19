import { CartList } from "@/components/CartList/CartList"
import { getCart } from "@/services/data-fetch/cart/get-cart";

export default async function Cart() {
  const cart = await getCart();

  return (
    <>
      <CartList cart={cart} />
    </>
  )
}
