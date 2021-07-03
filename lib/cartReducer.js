import { v4 as uuidv4 } from "uuid";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "show-product-details":
      return {
        ...state,
        cartIsShown: false,
        productDetailsIsShown: true,
        currentProduct: {
          ...action.product,
          "Age Bracket": null,
          "Skin Type": null,
          Frequency: null,
          quantity: 1,
        },
      };

    case "add-new-product-to-cart":
      return {
        ...state,
        cartIsShown: true,
        currentProduct: {},
        productDetailsIsShown: false,
        cart: [...state.cart, { ...state.currentProduct, clientId: uuidv4() }],
      };

    case "increase-product-quantity":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.clientId === action.cid
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        ],
      };

    case "increase-product-quantity-from-cart":
      return {
        ...state,
        cartIsShown: true,
        currentProduct: {},
        productDetailsIsShown: false,
        cart: [
          ...state.cart.map((item) =>
            item.clientId === action.cid
              ? { ...item, quantity: action.quantity }
              : item
          ),
        ],
      };

    case "decrease-product-quantity":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.clientId === action.cid
              ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity-- }
              : item
          ),
        ],
      };

    case "remove-cart-item":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.clientId !== action.id)],
      };

    case "update-product-options":
      return {
        ...state,
        currentProduct: { ...state.currentProduct, [action.field]: action.value },
      };

    case "update-product-currency":
      return {
        ...state,
        currency: action.currency,
      };

    case "update-all-cart":
      return {
        ...state,
        cart: action.cart,
      };

    case "close-cart":
      return {
        ...state,
        cartIsShown: false,
        productDetailsIsShown: false,
      };

    case "open-cart":
      return {
        ...state,
        cartIsShown: true,
        productDetailsIsShown: false,
      };

    case "close-details":
      return {
        ...state,
        currentProduct: {},
        cartIsShown: false,
        productDetailsIsShown: false,
      };

    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

export default cartReducer;
