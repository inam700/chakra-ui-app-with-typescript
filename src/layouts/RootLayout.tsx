import { Fragment } from "react";
import { Flex, Image, LinkBox, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import brandIcon from "../assets/images/brand-icon.png";

type Props = {
  brandName?: string;
};

const RootLayout = (props: Props) => {
  const { brandName } = props;
  return (
    <Fragment>
      <Flex
        bg={"blue.100"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={10}
      >
        <Image src={brandIcon} width={100} />{" "}
        <Text as={"span"}>Hello {brandName} </Text>
        <Flex>
          {[
            { id: 1, name: "Home", link: "/" },
            { id: 2, name: "About", link: "about" },
            { id: 3, name: "Help", link: "help" },
          ].map((link) => (
            <LinkBox
              key={link.id}
              mx={2}
              px={5}
              py={1}
              border="1px solid"
              borderColor={"gray.100"}
              borderRadius={5}
              _hover={{
                bg: "gray.100",
              }}
              cursor={"pointer"}
            >
              <NavLink to={link.link} key={link.id}>
                {link.name}
              </NavLink>
            </LinkBox>
          ))}
        </Flex>
      </Flex>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
