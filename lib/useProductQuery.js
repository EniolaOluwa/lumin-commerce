import { useQuery, gql } from "@apollo/client";
import { useCartState } from "../lib/cartContext";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($currency: Currency!) {
    products {
      id
      title
      image_url
      price(currency: $currency)
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

const useProductQuery = () => {
  const { currency } = useCartState();
  const { data, error, loading, refetch } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: { currency },
    fetchPolicy: "no-cache",
  });
  return { data, error, loading, refetch };
};

export default useProductQuery;
