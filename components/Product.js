import formatMoney from "../lib/formatMoney";
import { Flex, Img, Text, Box, Button } from "@chakra-ui/react";
import { useCartDispatch } from "../lib/cartContext";

const Product = ({ product }) => {
  const dispatch = useCartDispatch();
  const showDetails = () => dispatch({ type: "show-product-details", product });

  return (
    <Flex h="lg" flexDirection="column" alignItems="center" padding="3rem 2rem">
      <Img
        objectFit="contain"
        width="xs"
        height="xs"
        src={product?.image_url}
        alt={product.title}
      />
      <Flex flexDirection="column" textAlign="center" pt="3">
        <Text fontSize="xl" fontWeight="normal" margin="0.5rem 0" lineHeight="1.5">
          {product.title}
        </Text>
        <Text fontSize="1.1rem" lineHeight="1.5">
          {formatMoney(product.price)}
        </Text>
        <Box>
          <Button
            colorScheme="teal"
            onClick={showDetails}
            rounded="none"
            width="xs"
            minHeight="42px"
            bg="#4B5548"
            mt="0.5rem"
            _focus={{ outline: "transparent" }}
            _hover={{ bg: "#2B2E2B" }}
            fontWeight="bold"
          >
            Add To Cart
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Product;
