import CloseIcon from "./CloseIcon";
import { sidebarStyle } from "./Cart";
import { FaSortDown } from "react-icons/fa";
import { useCartState, useCartDispatch } from "../lib/cartContext";
import {
  Box,
  Img,
  Flex,
  Text,
  Select,
  Button,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const Cart = () => {
  const dispatch = useCartDispatch();
  const { productDetailsIsShown, currentProduct, cart } = useCartState();

  const updateOption = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "update-product-options", field: name, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const foundItem = cart.find((cartItem) => {
      if (
        cartItem.id === currentProduct.id &&
        cartItem["Age Bracket"] === currentProduct["Age Bracket"] &&
        cartItem["Skin Type"] === currentProduct["Skin Type"] &&
        cartItem.Frequency === currentProduct.Frequency
      ) {
        return true;
      }
    });

    if (foundItem) {
      dispatch({
        type: "increase-product-quantity-from-cart",
        cid: foundItem.clientId,
        quantity: foundItem.quantity + 1,
      });
    } else {
      dispatch({
        type: "add-new-product-to-cart",
        product: currentProduct,
      });
    }
  };

  const closeDetails = () => dispatch({ type: "close-details" });

  return (
    <Box
      zIndex="tooltip"
      transform={productDetailsIsShown ? "translateX(0)" : "translateX(100%)"}
      style={sidebarStyle}
    >
      <Flex alignItems="center" height="50" mb="70px">
        <CloseIcon clickAction={closeDetails} />
        <Box>
          <Img
            height="45"
            src={currentProduct?.image_url}
            alt={currentProduct.title}
          />
        </Box>
      </Flex>
      <Flex flexDirection="column">
        <Text as="h4" color="#2b2e2b" fontSize="26" fontWeight="light">
          First, let&rsquo;s personalize.
        </Text>
        <Text
          as="h5"
          mb="30"
          fontSize="13"
          fontWeight="400"
          letterSpacing="0.3"
          color="#2b2e2b"
        >
          Products that you receive may vary according to your age bracket & skin
          type to optimize results.
        </Text>
        <Text
          as="h6"
          color="#2b2e2b"
          fontSize="11"
          padding="7px 0 16px"
          fontWeight="bold"
        >
          Personalization Details
        </Text>
        <Flex onSubmit={onSubmit} flexDirection="column" as="form">
          {currentProduct?.product_options &&
            currentProduct.product_options.map((option) => (
              <FormControl padding="5px 0" key={option.title}>
                <FormLabel color="#2b2e2b" fontSize="11" fontWeight="600" mb="0">
                  {option.title}
                </FormLabel>
                <Select
                  name={option.title}
                  bg="white"
                  height="50px"
                  rounded="none"
                  fontSize="11"
                  fontWeight="400"
                  borderColor="white"
                  icon={<FaSortDown />}
                  onChange={updateOption}
                  _focus={{ outline: "white" }}
                  _hover={{ outline: "white" }}
                  value={currentProduct[option.title]}
                >
                  {option?.options.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </Select>
              </FormControl>
            ))}
          <Button
            marginTop="15"
            height="52px"
            bg="#4b5548"
            fontWeight="600"
            rounded="none"
            color="white"
            type="submit"
            _hover={{ bg: "#4b5548" }}
          >
            ADD TO CART
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Cart;
