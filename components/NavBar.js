import Languages from "./Languages";
import getCartSize from "../lib/getCartSize";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartState, useCartDispatch } from "../lib/cartContext";
import { Box, IconButton, Badge, Flex, Select, Link } from "@chakra-ui/react";

export default function Nav() {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  const openCart = () => dispatch({ type: "open-cart" });

  return (
    <Flex pr={4} alignItems="center" w="xs" justifyContent="space-between">
      <Link>Account</Link>
      <Link onClick={openCart}>
        <IconButton
          size="46px"
          background="white"
          aria-label="Shopping cart"
          _hover={{ background: "white" }}
          icon={<AiOutlineShoppingCart />}
        />
        <Badge rounded="full" bg="white">
          {getCartSize(cart)}
        </Badge>
      </Link>
      <Languages />
    </Flex>
  );
}
