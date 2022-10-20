import { Box } from "@chakra-ui/react";
import React from "react";
import "./skill.css";
export const Skill = ({ color, comp, reflink }) => {
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
        <span>{comp}</span>
      </a>
    </Box>
  );
};
