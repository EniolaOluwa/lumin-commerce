import CartItem from "./CartItem";
import CartStyles from "./styles/SideBarStyles";
import { useCartState, useCartDispatch } from "../lib/cartContext";
const Cart = () => {
  const dispatch = useCartDispatch();
  const { cartIsShown, cart } = useCartState();

  const closeCart = () => dispatch({ type: "close-cart" });

  return (
    <CartStyles open={cartIsShown}>
      <header>YOUR CART</header>
      <span onClick={closeCart}>&times; </span>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartStyles>
  );
};

export default Cart;
