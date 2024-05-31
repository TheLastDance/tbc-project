import { MainHeader } from "../Headers/MainHeader/MainHeader"
import { MainFooter } from "../Footers/MainFooter/MainFooter"
import { CartOptimisticContextProvider } from "@/services/providers/CartOptimisticProvider";
import { getCart } from "@/services/data-fetch/cart/get-cart";

export async function MainLayout({ children }: ChildrenProps) {
  const cart = await getCart();
  // optimistic provider will not show fresh data quickly when you will navigate to another page, to fix this I need to use Template instead of Layout in future

  return (
    <>
      <CartOptimisticContextProvider cart={cart}>
        <MainHeader />
        <main>
          {children}
        </main>
        <MainFooter />
      </CartOptimisticContextProvider>
    </>
  )
}
