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
import { Gbtn } from "../utility/Component/Gbtn";
export const Hero = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box bgRepeat={"no-repeat"} h="100vh" w={"100%"} mt="2rem">
      <VStack className="name" gap={"15px"}>
        <VStack align={"flex-start"} px="5px">
          <Text textAlign="left">Hi I'm</Text>
          <Heading fontSize={"2.8rem"}>Saroj Kumar Pahi</Heading>
          <Text>Full Stack Web Developer</Text>
        </VStack>
        <Box>
          <Gbtn onToggle={onToggle} />
        </Box>
        <Flex
          position={"relative"}
          top="25px"
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
