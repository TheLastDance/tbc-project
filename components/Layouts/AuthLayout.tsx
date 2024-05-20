import { AuthHeader } from "../Headers/AuthHeader/AuthHeader"
import { AuthFooter } from "../Footers/AuthFooter/AuthFooter"
import { CartOptimisticContextProvider } from "@/services/providers/CartOptimisticProvider";
import { getCart } from "@/services/data-fetch/cart/get-cart";

export async function AuthLayout({ children }: ChildrenProps) {
  const cart = await getCart();

  return (
    <>
      <CartOptimisticContextProvider cart={cart}>
        <AuthHeader />
        <main>
          {children}
        </main>
        <AuthFooter />
      </CartOptimisticContextProvider>
    </>
  )
}
