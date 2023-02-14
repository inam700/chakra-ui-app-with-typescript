import { Box, Heading, LinkBox, Flex } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
  return (
    <Box>
      <Heading textAlign={"center"}>Help Page</Heading>
      <Flex mt={5} width={"100%"} justifyContent={"center"}>
        {[
          { id: 1, name: "FAQ", link: "faq" },
          { id: 2, name: "Contact", link: "contact" },
        ].map((link) => (
          <LinkBox
            key={link.id}
            mx={2}
            px={5}
            py={1}
            bg={"gray.100"}
            borderRadius={5}
            _hover={{
              bg: "gray.200",
            }}
            cursor={"pointer"}
          >
            <NavLink to={link.link} key={link.id}>
              {link.name}
            </NavLink>
          </LinkBox>
        ))}
      </Flex>
      <Outlet />
    </Box>
  );
};

export default Help;
