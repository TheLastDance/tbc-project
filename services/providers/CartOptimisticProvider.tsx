"use client";
import { useState } from "react";
import { createContext, useOptimistic } from "react";

type CartOptimisticContextType = {
  optimistic: IStorageCart;
  addOptimistic: (action: IStorageCart) => void;
  isAdding: boolean;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartOptimisticContext = createContext<CartOptimisticContextType>({
  optimistic: { count: 0, price: 0, products: [] },
  addOptimistic: () => { },
  isAdding: false,
  setIsAdding: () => { },
});

export function CartOptimisticContextProvider({ children, cart }: { children: React.ReactNode; cart: IStorageCart }) {
  const [isAdding, setIsAdding] = useState(false);
  const [optimistic, addOptimistic] = useOptimistic<IStorageCart, IStorageCart>(
    cart,
    (state, newCart) => {
      return { ...state, ...newCart };
    }
  );

  return (
    <CartOptimisticContext.Provider value={{ optimistic, addOptimistic, isAdding, setIsAdding }}>
      {children}
    </CartOptimisticContext.Provider>
  );
}