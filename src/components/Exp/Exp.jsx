import React from "react";
import "./exp.css";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import {
  SiRedux,
  SiReact,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiBabel,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { Skill } from "./Skill";
export const Skills = () => {
  return (
    <section id="exp">
      <VStack align={"center"} justify={"center"} my="20px">
        <Heading color={"#00ccff"}>About My Skills</Heading>
      </VStack>
      <Box className="skillscont" mt={"60px"} w="80%" mx={"auto"}>
        <Box className="skills">
          <Skill color={"#e44c24"} comp={<IoLogoHtml5 />} />
          <Skill color={"#fcc43d"} comp={<SiJavascript />} />
          <Skill color={"#1474b4"} comp={<IoLogoCss3 />} />
          <Skill color={"#a3e8fd"} comp={<SiReact />} />
          <Skill color={"#441f71"} comp={<SiRedux />} />
          <Skill color={"#f58519"} comp={<SiFirebase />} />
          <Skill color={"#65b555"} comp={<SiMongodb />} />
          <Skill color={"#007acc "} comp={<SiTypescript />} />
          <Skill color={"#3c873a"} comp={<IoLogoNodejs />} />
          <Skill color={"#303030"} comp={<SiExpress />} />
          <Skill color={"#F0DB4F"} comp={<SiBabel />} />
          <Skill color={"#3bc6bd"} comp={<SiChakraui />} />
          <Skill color={"#0c81d8"} comp={<SiMaterialui />} />
          <Skill color={"#563d7c "} comp={<SiBootstrap />} />
          <Skill color={"#3bbbfa"} comp={<SiTailwindcss />} />
          <Skill color={"#f43e2f"} comp={<SiGit />} />
        </Box>
      </Box>
    </section>
  );
};
