import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import cv from "../../../Assets/Saroj_Kumar_Pahi_Resume.pdf";
import "../Style/Gbtn.css";
export const Gbtn = ({ onToggle }) => {
  return (
    <Flex
      justify={"center"}
      align="center"
      gap={[1, 2, 3, 4, 6]}
      flexWrap="wrap"
    >
      <Box w="150px">
        <a href={cv} download>
          <Box className="gbtn">
            <span>Resume</span>
          </Box>
        </a>
      </Box>
      <Box w="150px">
        <Box className="gbtn" onClick={onToggle}>
          <span>Contact</span>
        </Box>
      </Box>
    </Flex>
  );
};
