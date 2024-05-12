"use client"
import { createContext, SetStateAction, useEffect, useState, useReducer } from "react"
import { useLocalStorage } from "../hooks/useLocaleStorage";
import { initialState, cartReducer } from "../reducers/cartReducer";

type CartContextType = {
  cart: IStorageCart;
  setCart: React.Dispatch<SetStateAction<IStorageCart>>;
  handleAddToCart: (item: IProductItem) => void;
  handleRemoveFromCart: (item: IProductItemCart) => void;
  handleDeleteFromCart: (item: IProductItemCart) => void;
  handleResetCart: () => void;
};

export const cartContext = createContext<CartContextType>({
  cart: initialState,
  setCart: () => { },
  handleAddToCart: () => { },
  handleRemoveFromCart: () => { },
  handleDeleteFromCart: () => { },
  handleResetCart: () => { },
});

export function CartProvider({ children }: ChildrenProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [cart, setCart] = useLocalStorage<IStorageCart>("cart", initialState);
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  useEffect(() => {
    if (isMounted) setCart(cartItems)
  }, [cartItems])

  const handleAddToCart = (item: IProductItem) => {
    if (isMounted) dispatch({ type: "INCREMENT", payload: { product: item, localState: cart } });
  }

  const handleRemoveFromCart = (item: IProductItemCart) => {
    if (isMounted) dispatch({ type: "DECREMENT", payload: { product: item, localState: cart } });
  }

  const handleDeleteFromCart = (item: IProductItemCart) => {
    if (isMounted) dispatch({ type: "DELETE", payload: { product: item, localState: cart } });
  }

  const handleResetCart = () => {
    if (isMounted) dispatch({ type: "RESET" });
  }

  const value = {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDeleteFromCart,
    handleResetCart
  }

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
