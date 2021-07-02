import { BiChevronRightCircle } from "react-icons/bi";
import { IconButton } from "@chakra-ui/react";

const CloseIcon = ({ clickAction }) => {
  return (
    <IconButton
      onClick={clickAction}
      as={BiChevronRightCircle}
      color="#C6CCC7"
      rounded="full"
      _hover={{ bg: "none" }}
    />
  );
};

export default CloseIcon;
