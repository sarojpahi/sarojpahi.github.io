import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./Hero.css";
import bg from "../../Assets/4k-technology-wallpaper.jpg";
import bgr from "../../Assets/4k-technology-wallpaper-rotate.jpg";
export const Hero = () => {
  return (
    <Box
      bgImage={[bgr, bgr, bg]}
      bgSize="100% 100%"
      bgRepeat={"no-repeat"}
      bgBlendMode
      h="100vh"
    >
      <Box className="name">
        <Text textAlign="left">Hi I'm</Text>
        <Heading>Saroj Kumar Pahi</Heading>
        <Text className="title" color={"white"}>
          Full Stack Web Developer
        </Text>
      </Box>
    </Box>
  );
};
