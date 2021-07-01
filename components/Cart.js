import CartItem from "./CartItem";
import CartStyles from "./styles/SideBarStyles";
import { BiChevronRightCircle } from "react-icons/bi";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { useCartState, useCartDispatch } from "../lib/cartContext";
const Cart = () => {
  const dispatch = useCartDispatch();
  const { cartIsShown, cart } = useCartState();

  const closeCart = () => dispatch({ type: "close-cart" });

  const cartStyle = {
    padding: "20px",
    position: "relative",
    background: "#f2f2ef",
    position: "fixed",
    height: "100%",
    top: "0",
    right: "0",
    width: "40%",
    minWidth: "500px",
    bottom: "0",
    transition: "all 0.3s",
    boxShadow: "0 0 10px 3px rgba(0, 0, 0, 0.2)",
  };

  return (
    <Box
      zIndex="tooltip"
      transform={cartIsShown ? "translateX(0)" : "translateX(100%)"}
      style={cartStyle}
    >
      <Flex alignItems="center">
        <IconButton
          onClick={closeCart}
          as={BiChevronRightCircle}
          color="#C6CCC7"
          rounded="full"
          _hover={{ bg: "none" }}
        />
        <Text alignSelf="center">YOUR CART</Text>
      </Flex>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default Cart;
