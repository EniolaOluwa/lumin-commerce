/* eslint-disable @next/next/no-img-element */
import CartStyles from "./styles/SideBarStyles";
import { useCartState, useCartDispatch } from "../lib/cartContext";
const Cart = () => {
  const dispatch = useCartDispatch();
  const { productDetailsIsShown, currentProduct } = useCartState();

  const updateOption = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "update-product-options", field: name, value });
  };

  return (
    <CartStyles open={productDetailsIsShown}>
      <span>&times; </span>
      <header>{currentProduct.title}</header>
      <img src={currentProduct?.image_url} alt={currentProduct.title} />
      {currentProduct?.product_options &&
        currentProduct.product_options.map((option) => (
          <label key={option.title}>
            {option.title}
            <select
              name={option.title}
              value={currentProduct[option.title]}
              onChange={updateOption}
            >
              {option?.options.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.value}
                </option>
              ))}
            </select>
          </label>
        ))}
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "add-product-to-cart", product: currentProduct })
        }
      >
        Add Cart
      </button>
    </CartStyles>
  );
};

export default Cart;
