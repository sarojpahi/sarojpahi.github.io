import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import cv from "../../../Assets/cvlatest.pdf";
import "../Style/Gbtn.css";
export const Gbtn = ({ onToggle }) => {
  return (
    <Flex
      justify={"center"}
      align="center"
      gap={[1, 2, 3, 4, 6, 8]}
      flexWrap="wrap"
    >
      <Box w="210px">
        <a href={cv} download>
          <Box className="gbtn">
            <span>Download Cv</span>
          </Box>
        </a>
      </Box>
      <Box w="140px">
        <Box className="gbtn" onClick={onToggle}>
          <span>Contact</span>
        </Box>
      </Box>
    </Flex>
  );
};
