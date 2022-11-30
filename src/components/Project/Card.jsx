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
import { TbArrowBigRightLines } from "react-icons/tb";
import { v4 as key } from "uuid";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utility/Component/motion";
export const Card = ({ flexDir, data }) => {
  const {
    title,
    image,
    link_1,
    link_2,
    description,
    techStack,
    logo,
    functions,
  } = data;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((p) => (p === 2 ? 0 : p + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Flex justify={flexDir ? "flex-start" : "flex-end"} width="100%">
      <motion.div
        variants={fadeIn("up", 0.2, 1.0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Box w="full">
          <Box
            className={flexDir ? "projectCard2" : "projectCard"}
            p="1.5rem"
            mx={[0, "2.5rem"]}
            mt="2.5rem"
            width={"100%"}
            border="3px solid"
            borderColor={"gray.700"}
          >
            <Box className={flexDir ? "projectImageBox2" : "projectImageBox"}>
              <Box className="boxImage">
                <img src={image[counter]} key={key} alt="image_1"></img>
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

              <Flex color={"white"} gap="4px" align={"center"} justify="center">
                <Box>
                  <Text w="120px" color={"whatsapp.100"}>
                    Tech Stack
                  </Text>
                </Box>
                <Box color="red" ml="-38px">
                  <TbArrowBigRightLines />
                </Box>
                <Text>{techStack}</Text>
              </Flex>
              <Flex
                my="15px"
                p="5px"
                justify={["center", "flex-start"]}
                w="100%"
              >
                <Pbtn link1={link_1} link2={link_2} />
              </Flex>
            </VStack>
          </Box>
        </Box>
      </motion.div>
    </Flex>
  );
};
