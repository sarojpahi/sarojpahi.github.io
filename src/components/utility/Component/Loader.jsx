import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import "../Style/loader.css";
export const Loader = () => {
  return (
    <Flex justify={"center"} align="center" w="250px" h="250px">
      <Box className="loadercont">
        <Box className="loader"></Box>
        <span>Loading...</span>
      </Box>
    </Flex>
  );
};
