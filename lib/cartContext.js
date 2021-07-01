import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  cart: [],
  currentProduct: {},
  cartIsShown: false,
  productDetailsIsShown: false,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used in a context provider");
  }
  return context;
};

const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used in a context provider");
  }
  return context;
};

export { CartProvider, useCartDispatch, useCartState };
