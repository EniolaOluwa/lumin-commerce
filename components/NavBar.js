import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import getCartSize from "../lib/getCartSize";
import { useCartState, useCartDispatch } from "../lib/cartContext";

export default function Nav() {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  const openCart = () => dispatch({ type: "open-cart" });

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="#">Sell</Link>
      <button type="button" onClick={openCart}>{`Cart ${getCartSize(cart)}`}</button>
      {/* </Link> */}
      <Link href="/account">Account</Link>
    </NavStyles>
  );
}
