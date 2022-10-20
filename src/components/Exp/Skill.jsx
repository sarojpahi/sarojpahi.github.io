import { Box } from "@chakra-ui/react";
import React from "react";
import "./skill.css";
export const Skill = ({ color, comp, ref }) => {
  return (
    <Box className="skill" w="max-content">
      <a href={ref} style={{ "--clr": color }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>{comp}</span>
      </a>
    </Box>
  );
};
