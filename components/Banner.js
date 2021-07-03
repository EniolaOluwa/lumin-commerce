import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const Banner = () => {
  return (
    <Flex
      height="md"
      width="100%"
      pr={8}
      pl={8}
      alignItems="center"
      background="#f5f5f4"
      justifyContent="space-between"
    >
      <Box>
        <Text fontSize="3rem" fontWeight="medium">
          All Products
        </Text>
        <Text fontSize="2rem">A 360° look at Lumin</Text>
      </Box>
      <Box as="form">
        <Select
          bg="white"
          width="xl"
          height="60px"
          rounded="none"
          fontSize="2rem"
          fontWeight="light"
          _focus={{ outline: "inherit" }}
        >
          <option disabled value="">
            Filter by
          </option>
          <option value="All Products">All Products</option>
          <option value="New Products">New Products</option>
          <option value="Sets">Sets</option>
          <option value="Skincare">Skincare</option>
          <option value="Hair & Body Care">Hair & Body Care</option>
          <option value="Accessories">Accessories</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default Banner;
