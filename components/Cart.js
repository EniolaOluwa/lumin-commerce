import CartItem from "./CartItem";
import CloseIcon from "./CloseIcon";
import Currencies from "./Currencies";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useCartState, useCartDispatch } from "../lib/cartContext";

export const sidebarStyle = {
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

const Cart = () => {
  const dispatch = useCartDispatch();
  const { cartIsShown, cart } = useCartState();

  const closeCart = () => dispatch({ type: "close-cart" });

  return (
    <Box
      zIndex="tooltip"
      style={sidebarStyle}
      transform={cartIsShown ? "translateX(0)" : "translateX(100%)"}
    >
      <Flex alignItems="center">
        <CloseIcon clickAction={closeCart} />
        <Text alignSelf="center">YOUR CART</Text>
      </Flex>
      <Currencies />
      <Flex height="3xl" overflowY="scroll" flexDirection="column">
        {cart.map((item) => (
          <CartItem key={item.clientId} item={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default Cart;
