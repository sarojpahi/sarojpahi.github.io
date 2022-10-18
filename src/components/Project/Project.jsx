import { Box } from "@chakra-ui/react";
import React from "react";
import bg from "../../Assets/w1.jpg";
export const Project = () => {
  return (
    <section id="project">
      <Box
        bgImage={[bg]}
        bgSize={["auto 100%", "100% 100%"]}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        h="100vh"
      ></Box>
    </section>
  );
};
