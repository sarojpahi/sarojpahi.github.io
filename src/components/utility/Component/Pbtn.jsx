import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import "../Style/Gbtn.css";
export const Pbtn = ({ link1, link2 }) => {
  return (
    <Flex justify={"center"} align="center" gap={[1, 2, 3, 4, 6, 8]}>
      <Box w="120px">
        <a href={link1} target="_blank" rel="noreferrer">
          <Box className="gbtn">
            <span>Demo</span>
          </Box>
        </a>
      </Box>
      <Box w="120px">
        <a href={link2} target="_blank" rel="noreferrer">
          <Box className="gbtn">
            <span>Link</span>
          </Box>
        </a>
      </Box>
    </Flex>
  );
};
