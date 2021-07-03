import { Grid } from "@chakra-ui/react";
import Product from "./Product";
import useProductQuery from "../lib/useProductQuery";

const Products = () => {
  const { data, error, loading } = useProductQuery();

  if (loading && data?.products.length < 1) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={0} bg="#E2E6E3" padding="20px 0">
      {data?.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default Products;
