import Products from "../components/Products";
import Cart from "../components/Cart";
import Details from "../components/Details";

export default function Home() {
  return (
    <>
      <Cart />
      <Details />
      <Products />
    </>
  );
}
