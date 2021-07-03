import { Box, Select } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import { FiChevronDown } from "react-icons/fi";
import useProductQuery from "../lib/useProductQuery";
import { useCartDispatch, useCartState } from "../lib/cartContext";

const ALL_CURRENCIES_QUERY = gql`
  query ALL_CURRENCIES_QUERY {
    currency
  }
`;

const Currencies = () => {
  const dispatch = useCartDispatch();
  const { refetch } = useProductQuery();
  const { currency, cart } = useCartState();
  const { data, loading, error } = useQuery(ALL_CURRENCIES_QUERY);

  const updatedCart = [
    ...cart.map((cartItem) => {
      const foundItem = data?.products.find((product) => product.id === cartItem.id);
      if (foundItem) {
        return { ...cartItem, price: foundItem.price };
      }
      return cartItem;
    }),
  ];

  const updateCurrency = (e) => {
    dispatch({ type: "update-product-currency", currency: e.target.value });
    refetch({ currency });
    dispatch({ type: "update-all-cart", cart: updatedCart });
  };

  return (
    <Box>
      <Select
        rounded="none"
        borderColor="white"
        disabled={error}
        outline="black"
        width="6rem"
        bg="white"
        height="12"
        mb="5"
        value={currency}
        onChange={updateCurrency}
        icon={<FiChevronDown />}
        _focus={{ outline: "white" }}
        _hover={{ outline: "white" }}
      >
        {loading && <option value="">loading...</option>}
        {data?.currency.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default Currencies;
