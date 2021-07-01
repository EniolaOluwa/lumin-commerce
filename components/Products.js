import { useQuery, gql } from "@apollo/client";
import Product from "./Product";
import { Grid } from "@chakra-ui/react";

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

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={0} bg="#E2E6E3" padding="20px 0">
      {data.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default Products;
