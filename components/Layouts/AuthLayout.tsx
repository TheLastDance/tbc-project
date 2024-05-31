import { AuthHeader } from "../Headers/AuthHeader/AuthHeader"
import { AuthFooter } from "../Footers/AuthFooter/AuthFooter"
import { CartOptimisticContextProvider } from "@/services/providers/CartOptimisticProvider";
import { getCart } from "@/services/data-fetch/cart/get-cart";

export async function AuthLayout({ children }: ChildrenProps) {
  const cart = await getCart();
  // optimistic provider will not show fresh data quickly when you will navigate to another page, to fix this I need to use Template instead of Layout in future

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
