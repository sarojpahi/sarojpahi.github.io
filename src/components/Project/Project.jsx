import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
export const Project = () => {
  return (
    <section id="project">
      <Box>
        <VStack align={"center"} justify={"center"} my="20px">
          <Heading color={"#00ccff"}>About My Projects</Heading>
        </VStack>
      </Box>
    </section>
  );
};
