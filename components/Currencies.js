import { Box, Select } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import { FiChevronDown } from "react-icons/fi";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_CURRENCIES_QUERY {
    currency
  }
`;

const Currencies = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

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
