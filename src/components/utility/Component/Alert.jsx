import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "../Style/alert.css";
export const Alert = ({ isOpen, onClose }) => {
  return (
    <Box className="alert" display={isOpen ? "block" : "none"}>
      <Flex w="100%" flexDir={"column"} gap="15px">
        <Box className="alerticon">
          <BsCheckLg />
        </Box>
        <Box mt="-15px">
          <Heading fontSize={"30px"}>Thank You</Heading>
          <Text>I'll get back to you soon.</Text>
        </Box>
        <button onClick={onClose} className="alertbtn">
          OK
        </button>
      </Flex>
    </Box>
  );
};
