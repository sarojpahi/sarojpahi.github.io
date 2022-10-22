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
import { Heroicons } from "../utility/Component/Heroicons";
import { GmContact } from "../utility/Component/GmContact";
import { Gbtn } from "../utility/Component/Gbtn";
export const Hero = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box bgRepeat={"no-repeat"} h="fit-content" w={"100%"} my="2rem">
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
      <Box className="contactpos" zIndex={"1002"}>
        <GmContact
          display={isOpen ? "Flex" : "none"}
          onC={onClose}
          isO={isOpen}
        />
      </Box>
    </Box>
  );
};
