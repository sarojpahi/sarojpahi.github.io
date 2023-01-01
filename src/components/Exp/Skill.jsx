import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "./skill.css";
export const Skill = ({ color, comp, reflink, name, icon }) => {
  return (
    <Box className="skill" w="max-content">
      <a
        href={reflink}
        target="_blank"
        rel="noreferrer"
        style={{ "--clr": color }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <Flex flexDirection={"column"} justify="center" align={"center"}>
            {comp || ""}
            {icon ? <img src={icon} className="skillicon" alt="" /> : " "}
            <Text fontFamily={"lora"} fontSize={["12px", "15px"]}>
              {name}
            </Text>
          </Flex>
        </span>
      </a>
    </Box>
  );
};
