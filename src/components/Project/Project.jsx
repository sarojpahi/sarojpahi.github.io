import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import "./project.css";
import data from "./data.json";
import { Card } from "./Card";
import { v4 as key } from "uuid";
export const Project = () => {
  return (
    <section id="project">
      <Box>
        <VStack align={"center"} justify={"center"} my="20px">
          <Heading color={"#00ccff"}>About My Projects</Heading>
        </VStack>
        <Flex
          justify="flex-end"
          align={"center"}
          flexWrap={"wrap"}
          width="100%"
          gap="10px"
        >
          {data ? data.map((el) => <Card key={key()} data={el} />) : ""}
        </Flex>
      </Box>
    </section>
  );
};
