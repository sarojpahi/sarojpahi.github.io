import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "./Hero.css";
import { Clock } from "../utility/Component/Clock";
import { Btn } from "../utility/Component/Btn";
import { Heroicons } from "../utility/Component/Heroicons";
import { GmContact } from "../utility/Component/GmContact";
export const Hero = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  function windowScroll() {
    if (window.scroll) onClose();
  }
  window.addEventListener("wheel", windowScroll);
  return (
    <Box bgRepeat={"no-repeat"} h="100vh" w={"100%"} mt="2rem">
      <VStack className="name" gap={"15px"}>
        <VStack align={"flex-start"}>
          <Text textAlign="left">Hi I'm</Text>
          <Heading fontSize={"2.8rem"}>Saroj Kumar Pahi</Heading>
          <Text>Full Stack Web Developer</Text>
        </VStack>
        <Box m="auto">
          <Btn name="Download CV" color={"#1e9bff"} onClick={onToggle} />
        </Box>
        <Flex
          position={"relative"}
          top="12px"
          align={"center"}
          justify="center"
          minW="250px"
          minH="250px"
        >
          <Clock />
        </Flex>
      </VStack>
      <Box width={"50%"} mt="-25px" display={["none", "block"]}>
        <Heroicons />
      </Box>
      <GmContact
        display={isOpen ? "Flex" : "none"}
        onClose={onClose}
        isOpen={isOpen}
      />
    </Box>
  );
};
