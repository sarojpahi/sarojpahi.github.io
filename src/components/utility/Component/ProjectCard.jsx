import { Box } from "@chakra-ui/react";
import React from "react";
// import "./projectcard.css";
export const ProjectCard = ({ img, img2, title, description }) => {
  return (
    <Box className="card">
      <Box className="imgBox" width={"250px"}>
        <div>
          <img src={img} alt="" />
        </div>
        <div></div>
      </Box>
      <Box className="details" h="100%"></Box>
    </Box>
  );
};
