import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Product from "./Product";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      title
      image_url
      price(currency: USD)
      product_options {
        title
        prefix
        options {
          id
          value
        }
        suffix
      }
    }
  }
`;

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ProductListStyles>
      {data.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ProductListStyles>
  );
};

export default Products;
