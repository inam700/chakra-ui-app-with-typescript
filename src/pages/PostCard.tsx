import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
  useBoolean,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

const PostCard = () => {
  const variant = useBreakpointValue(
    {
      base: "solid",
      md: "ghost",
    },
    { fallback: "md" }
  );
  const [flag, setFlag] = useBoolean();
  return (
    <Box>
      <Card maxW={"md"} m={3}>
        <CardHeader>
          <Flex flex={1} gap={4} alignItems={"center"} flexWrap={"wrap"}>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size={"sm"}>Segun Adebayo</Heading>
              <Text> Creator, Chakra UI</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
          <Text as={"p"} onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
            {flag ? "initial" : "none"}
          </Text>
        </CardBody>
        <Image
          objectFit={"cover"}
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
        <CardFooter
          justify={"space-between"}
          flexWrap={"wrap"}
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          {[
            { name: "Like", icon: faThumbsUp },
            { name: "Comment", icon: faComment },
            { name: "Share", icon: faShareSquare },
          ].map((item, index) => (
            <Button
              key={index}
              flex={1}
              variant={variant}
              leftIcon={<FontAwesomeIcon icon={item.icon} />}
            >
              {item.name}
            </Button>
          ))}
        </CardFooter>
      </Card>
    </Box>
  );
};

export default PostCard;
