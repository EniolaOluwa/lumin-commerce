import { useState } from "react";
export const useCartItem = () => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (product) => {
    setCartItems((cartItems) => {
      //if exist
      if (cartItems.find(item.id === product.id)) {
        return [...cartItems, { ...product, qty: 1 }];
      } else {
        return [...cartItems, { ...product, qty: product }];
      }
    });
  };

  return { cartItems, addCartItem };
};
