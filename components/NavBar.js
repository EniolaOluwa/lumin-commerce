import getCartSize from "../lib/getCartSize";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartState, useCartDispatch } from "../lib/cartContext";
import { Box, IconButton, Badge, Flex, Select, Link } from "@chakra-ui/react";

export default function Nav() {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  const openCart = () => dispatch({ type: "open-cart" });

  return (
    <Flex pr={4} alignItems="center" w="sm" justifyContent="space-between">
      <Link>Account</Link>
      <Link onClick={openCart}>
        <IconButton
          background="white"
          _hover={{ background: "white" }}
          as={AiOutlineShoppingCart}
          w={8}
          h={8}
        />
        <Badge rounded="full" bg="white">
          {getCartSize(cart)}
        </Badge>
      </Link>
      <Box>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Flex>
  );
}
