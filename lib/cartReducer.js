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

    case "add-product-to-cart":
      return {
        ...state,
        cart: state.cart.find(
          (item) =>
            item.id === action.product.id &&
            item["Age Bracket"] === action.product["Age Bracket"] &&
            item["Skin Type"] === action.product["Skin Type"] &&
            item.Frequency === action.product.Frequency
        )
          ? [
              ...state.cart.map((item) =>
                item.id === action.product.id &&
                item["Age Bracket"] === action.product["Age Bracket"] &&
                item["Skin Type"] === action.product["Skin Type"] &&
                item.Frequency === action.product.Frequency
                  ? { ...item, quantity: item.quantity++ }
                  : item
              ),
            ]
          : [...state.cart, action.product],
        cartIsShown: true,
        currentProduct: {},
        productDetailsIsShown: false,
      };

    case "increase-product-quantity":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.id === action.product.id &&
            item["Age Bracket"] === action.product["Age Bracket"] &&
            item["Skin Type"] === action.product["Skin Type"] &&
            item.Frequency === action.product.Frequency
              ? { ...item, quantity: item.quantity++ }
              : item
          ),
        ],
      };

    case "decrease-product-quantity":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) =>
            item.id === action.product.id &&
            item["Age Bracket"] === action.product["Age Bracket"] &&
            item["Skin Type"] === action.product["Skin Type"] &&
            item.Frequency === action.product.Frequency
              ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity-- }
              : item
          ),
        ],
      };

    case "remove-cart-item":
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (item) =>
              item.id !== action.product.id &&
              item["Age Bracket"] !== action.product["Age Bracket"] &&
              item["Skin Type"] !== action.product["Skin Type"] &&
              item.Frequency !== action.product.Frequency
          ),
        ],
      };

    case "update-product-options":
      return {
        ...state,
        currentProduct: { ...state.currentProduct, [action.field]: action.value },
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

    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

export default cartReducer;
