type Action = { type: "INCREMENT", payload: { product: IProductItem, localState: IStorageCart } } |
{ type: "DECREMENT", payload: { product: IProductItemCart, localState: IStorageCart } } |
{ type: "DELETE", payload: { product: IProductItemCart, localState: IStorageCart } } |
{ type: "RESET" };

export const initialState = {
  count: 0,
  products: [],
}

export function cartReducer(_: IStorageCart, action: Action): IStorageCart {
  switch (action.type) {

    case "INCREMENT": {
      const { product, localState } = action.payload;
      const { products } = localState;

      const isPresent = products.find(item => item.id === product.id);

      if (!isPresent) return { count: localState.count + 1, products: [...products, { ...product, quantity: 1 }] };

      const newCart = products.map(item => item.id === product.id ? ({ ...item, quantity: item.quantity + 1 }) : ({ ...item }))
      return { count: localState.count + 1, products: newCart };
    }

    case "DECREMENT": {
      const { product, localState } = action.payload;
      const { products } = localState;

      if (product.quantity <= 1) return { count: localState.count - 1, products: products.filter(item => item.id !== product.id) };

      const newCart = products.map(item => item.id === product.id ? ({ ...item, quantity: item.quantity - 1 }) : ({ ...item }))
      return { count: localState.count - 1, products: newCart };
    }

    case "DELETE": {
      const { product, localState } = action.payload;
      const { products } = localState;

      return { count: localState.count - product.quantity, products: products.filter(item => item.id !== product.id) };
    }

    case "RESET": {
      return { ...initialState };
    }
  }
}