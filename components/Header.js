import NavBar from "./NavBar";
import { Box, Image, Link, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      bg="white"
      zIndex="sticky"
      boxShadow="0 2px 3px -3px grey"
      w="100%"
      justifyContent="space-between"
      p={4}
      color="black"
      position="sticky"
      top={0}
      mb={12}
    >
      <Flex flexDirection="row" width="lg" justifyContent="space-between">
        <Box boxSize="xs" width="163px" height="44px" pl={4} pr={4}>
          <Image src="/logo.png" height="100%" alt="Lumin Logo" />
        </Box>
        <Flex width="sm" alignItems="center" justifyContent="space-between">
          <Link _hover={{ color: "#3d5b57", textDecoration: "none" }} href="#">
            Shop
          </Link>
          <Link _hover={{ color: "#3d5b57", textDecoration: "none" }} href="#">
            Help
          </Link>
          <Link _hover={{ color: "#3d5b57", textDecoration: "none" }} href="#">
            Blog
          </Link>
        </Flex>
      </Flex>
      <NavBar />
    </Flex>
  );
}
