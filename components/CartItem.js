/* eslint-disable @next/next/no-img-element */
import formatMoney from "../lib/formatMoney";
import { useCartDispatch } from "../lib/cartContext";

const CartItem = ({ item }) => {
  const dispatch = useCartDispatch();

  const increaseQty = (product) => {
    dispatch({ type: "increase-product-quantity", product });
  };

  const decreaseQty = (product) => {
    dispatch({ type: "decrease-product-quantity", product });
  };

  const deleteItem = (product) => {
    dispatch({ type: "remove-cart-item", product });
  };

  return (
    <div key={item.id}>
      <span onClick={() => deleteItem(item)}>&times; </span>
      <h5>{item.title}</h5>
      <span>
        {item["Skin Type"] && item["Skin Type"]}
        {item["Age Bracket"] != null ? ` | ${item["Age Bracket"]}` : ""}
      </span>
      <p>{item?.Frequency}</p>
      <img height="50" width="50" src={item?.image_url} alt={item.title} />
      <span>{formatMoney(item.price * item.quantity)}</span>
      <div>
        <button type="button" onClick={() => decreaseQty(item)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => increaseQty(item)}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
