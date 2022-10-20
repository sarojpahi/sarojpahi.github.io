import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import "./project.css";
import me from "../../Assets/wallpapertip_full-hd-phone-wallpapers_152079.jpg";
import { ProjectCard } from "./ProjectCard";
export const Project = () => {
  return (
    <section id="project">
      <Box>
        <VStack align={"center"} justify={"center"} my="20px">
          <Heading color={"#00ccff"}>About My Projects</Heading>
        </VStack>
        <Flex
          align={"center"}
          justify="center"
          flexWrap={"wrap"}
          width="75%"
          gap="0px 20px"
          m="auto"
        >
          <ProjectCard img={me} img2={me} />
          <ProjectCard img={me} />
          <ProjectCard img={me} />
          <ProjectCard img={me} />
          <ProjectCard img={me} />
          <ProjectCard img={me} />
        </Flex>
      </Box>
    </section>
  );
};
