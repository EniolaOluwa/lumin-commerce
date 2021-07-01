/* eslint-disable @next/next/no-img-element */
import ProductStyles from "./styles/ProductStyles";
import TitleStyles from "./styles/TitleStyles";
import formatMoney from "../lib/formatMoney";
import { useCartDispatch } from "../lib/cartContext";

const Product = ({ product }) => {
  const dispatch = useCartDispatch();
  const showDetails = () => dispatch({ type: "show-product-details", product });

  return (
    <ProductStyles>
      <img src={product?.image_url} alt={product.title} />
      <TitleStyles>{product.title}</TitleStyles>
      <span className="price">{formatMoney(product.price)}</span>
      <div className="buttonList">
        <button type="button" onClick={showDetails}>
          Add To Cart
        </button>
      </div>
    </ProductStyles>
  );
};

export default Product;
