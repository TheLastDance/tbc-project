import { AuthLayout } from "@/components/Layouts/AuthLayout";
import { CartProvider } from "@/services/providers/CartProvider";

export default async function Layout({ children }: ChildrenProps) {
  return <CartProvider>
    <AuthLayout>{children}</AuthLayout>
  </CartProvider>;
}
