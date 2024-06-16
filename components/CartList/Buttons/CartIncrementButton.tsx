"use client"
import { incrementCart } from "@/services/actions";
import { useTransition } from "react";
import { useCartOptimistic } from "@/services/hooks/useCartOptimistic";
import { Button } from "@/components/UI/Buttons/Button/Button";
import { TranslationKey } from "@/translations/translations";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

interface IProps {
  children?: React.ReactNode,
  item: IProductItemCart | IProductItem,
  translationKey?: TranslationKey;
  mode?: "glitch" | "glitchHover" | "none";
}

export function CartIncrementButton({ children, item, mode, translationKey }: IProps) {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [, startTransition] = useTransition();
  const { optimistic, addOptimistic, setIsAdding } = useCartOptimistic();


  const handleIncrement = async () => {
    if (!isLoading && user) {
      setIsAdding(true);
      startTransition(() => {
        const isNew = optimistic.products.find(p => p.id === item.id);

        const newProducts = isNew ? optimistic.products.map(p => p.id === item.id ? ({ ...p, quantity: p.quantity + 1 }) : ({ ...p })) : [{ ...item, quantity: 1 }, ...optimistic.products]

        const newCart = {
          count: optimistic.count + 1,
          price: optimistic.price + item.price,
          products: newProducts,
        }
        return addOptimistic(newCart)
      })
      await incrementCart(item.id);
      setIsAdding(false);
    } else {
      router.push("/api/auth/login")
    }
  }

  return (
    <Button
      type="button"
      mode={mode}
      translationKey={translationKey}
      onClick={handleIncrement}
    >
      {children}
    </Button>
  )
}

