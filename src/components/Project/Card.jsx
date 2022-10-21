import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Pbtn } from "../utility/Component/Pbtn";
import "./card.css";
import { GiFireDash } from "react-icons/gi";
import { v4 as key } from "uuid";
export const Card = ({ data }) => {
  const {
    title,
    image_1,
    link_1,
    link_2,
    image_2,
    description,
    techStack,
    logo,
    functions,
  } = data;
  return (
    <Box
      className="projectCard"
      p="1.5rem"
      mx={[0, "2.5rem"]}
      mt="2.5rem"
      border={"1px solid red"}
    >
      <Box className="projectImageBox">
        <Box className="boxImage">
          <img src={image_1} alt="image_1"></img>
        </Box>
      </Box>
      <VStack
        className="projectDetails"
        p="10px"
        zIndex={100}
        width="100%"
        align={"flex-start"}
      >
        <Flex align={"center"} justify="flex-start" gap="5px">
          <Image src={logo} w="40px" h="40px" />
          <Heading className="projectTitle" color={"#00ccff"}>
            {title}
          </Heading>
        </Flex>
        <Text color={"white"}>{description}</Text>
        <List pl="15px">
          {functions
            ? functions.map((el) => (
                <ListItem key={key()} color={"white"}>
                  <ListIcon as={GiFireDash} color="red" />
                  {el}
                </ListItem>
              ))
            : ""}
        </List>

        <Flex color={"white"} gap="4px">
          <Text color={"whatsapp.100"}>Tech Stack</Text>
          <Text color="red" fontWeight={"bold"}>
            :
          </Text>
          <Text>{techStack}</Text>
        </Flex>
        <Box my="15px" p="5px">
          <Pbtn link1={link_1} link2={link_2} />
        </Box>
      </VStack>
    </Box>
  );
};
