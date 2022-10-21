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
          className="pcs"
          align={"center"}
          w="100%"
          gap="10px"
          flexWrap={"wrap"}
        >
          {data
            ? data.map((el, i) => (
                <Card key={key()} data={el} flexDir={i % 2 === 0} />
              ))
            : ""}
        </Flex>
      </Box>
    </section>
  );
};
