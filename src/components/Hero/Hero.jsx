import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./Hero.css";
import { Clock } from "../utility/Component/Clock";
import { Btn } from "../utility/Component/Btn";
import { Heroicons } from "../utility/Component/Heroicons";
export const Hero = () => {
  return (
    <Box
      bgSize="100% 100%"
      bgRepeat={"no-repeat"}
      h="100vh"
      w={"full"}
      border="1px solid red"
    >
      <Flex
        position="absolute"
        top="2rem"
        right="3.5rem"
        align={"center"}
        justify="center"
        w="250px"
        h="250px"
      >
        <Clock />
      </Flex>
      <Box className="name">
        <Text textAlign="left">Hi I'm</Text>
        <Heading fontSize={"2.4rem"}>Saroj Kumar Pahi</Heading>
        <Text>Full Stack Web Developer</Text>
        <Box position={"relative"} bottom="-3rem" left={"-3rem"}>
          <Btn name="Download CV" color={"#1e9bff"} />
        </Box>
      </Box>
      <Box position={"relative"} top="50%">
        <Heroicons />
      </Box>
    </Box>
  );
};
