import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./About.css";
export const About = () => {
  return (
    <section id="about">
      <Box h="100vh">
        <Text color={"red"}>Get To Know</Text>
        <Text color={"red"}>About Me</Text>
        <div className="aboutMe">
          <div
            className="aboutContent"
            style={{
              width: "60%",
              margin: "auto",
              textAlign: "center",
              color: "red",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            eligendi? Nobis est odit sapiente enim a incidunt praesentium amet
            delectus eveniet facere aperiam, voluptatem ipsum asperiores
            laudantium quisquam perferendis beatae.
          </div>
        </div>
      </Box>
    </section>
  );
};
