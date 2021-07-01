import formatMoney from "../lib/formatMoney";
import { useCartDispatch } from "../lib/cartContext";
import { FaTimes } from "react-icons/fa";
import { Box, Img, Button, Flex, Text, IconButton } from "@chakra-ui/react";

const CartItem = ({ item }) => {
  const dispatch = useCartDispatch();

  const increaseQty = (product) => {
    dispatch({ type: "increase-product-quantity", product });
  };

  const decreaseQty = (product) => {
    dispatch({ type: "decrease-product-quantity", product });
  };

  const deleteItem = (id) => {
    dispatch({ type: "remove-cart-item", id });
  };

  return (
    <Flex
      bg="white"
      height="135px"
      width="100%"
      maxWidth="550px"
      key={item.id}
      marginBottom="20px"
      padding="15"
      flexDirection="column"
    >
      <Flex width="100%" alignItems="flex-end" flexDirection="column">
        <IconButton
          width={4}
          height={4}
          as={FaTimes}
          bg="none"
          cursor="pointer"
          _hover={{ bg: "none" }}
          onClick={() => deleteItem(item.clientId)}
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" height="100%">
        <Flex flexDirection="column">
          <Text
            fontSize="lg"
            fontWeight="normal"
            mb="0.5"
            mt="0.5rem"
            lineHeight="1.5"
          >
            {item.title}
          </Text>
          <Text fontSize="10px">
            {item["Skin Type"] && item["Skin Type"]}
            {item["Age Bracket"] != null ? ` | ${item["Age Bracket"]}` : ""}
          </Text>
          <Flex alignItems="center" border="1px solid grey" width="6.5rem">
            <Button
              bg="white"
              outline="none"
              _hover={{ bg: "white" }}
              _focus={{ outline: "transparent" }}
              onClick={() => decreaseQty(item)}
            >
              -
            </Button>
            <Text>{item.quantity}</Text>
            <Button
              bg="white"
              outline="none"
              _hover={{ bg: "white" }}
              _focus={{ outline: "transparent" }}
              onClick={() => increaseQty(item)}
            >
              +
            </Button>
          </Flex>
        </Flex>
        <Box alignSelf="flex-end">
          <Text fontSize="xl" fontWeight="normal" lineHeight="1.5">
            {formatMoney(item.price * item.quantity)}
          </Text>
        </Box>
        <Box>
          <Img
            objectFit="contain"
            height="50"
            width="50"
            marginRight="4rem"
            src={item?.image_url}
            alt={item.title}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
