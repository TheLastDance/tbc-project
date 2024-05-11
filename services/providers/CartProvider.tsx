"use client"
import { createContext, SetStateAction } from "react"
import { useLocalStorage } from "../hooks/useLocaleStorage";

type CartContextType = {
  cart: number;
  setCart: React.Dispatch<SetStateAction<number>>;
};

export const cartContext = createContext<CartContextType>({
  cart: 0,
  setCart: () => { },
});

export function CartProvider({ children }: ChildrenProps) {
  const [cart, setCart] = useLocalStorage<number>("product", 0);

  const value = {
    cart,
    setCart
  }

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
