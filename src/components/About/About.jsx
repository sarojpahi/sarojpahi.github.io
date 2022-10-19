import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./About.css";
import me from "../../Assets/me.png";
export const About = () => {
  return (
    <section id="about">
      <Box>
        <VStack align={"center"} justify={"center"} my="20px">
          <Heading color={"#00ccff"}>About Me</Heading>
        </VStack>
        <Flex
          w="100%"
          align={"center"}
          justify={[
            "center",
            "center",
            "space-around",
            "space-around",
            "center",
            "center",
          ]}
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "row",
            "row",
            "row",
            "row",
          ]}
          gap="20px"
        >
          <VStack
            p="10px"
            color="white"
            w={["100%", "100%", "100%", "50%", "60%", "70%"]}
          >
            <Text w="95%" fontSize={["", "20px"]}>
              I’m an enthusiastic Full Stack Web Developer with a passion for
              developing scalable web applications and working across the full
              stack. Adaptive to all kinds of people, and surrounding and always
              appreciate constructive criticism to improve my performance. A
              highly self-motivated person with strong communication skills and
              effective team management skills. A great learner with a
              problem-solving mindset.
            </Text>
            <Text w="95%" fontSize={["", "20px"]}>
              I’m quite proficient in collaboration, and decision-making and
              always accountable for my decisions. Seeking to work in an
              environment that can encourage me to succeed both personally and
              professionally and where I can utilize my skills and Knowledge not
              only for my growth but also for the people around me.
            </Text>
          </VStack>
          <VStack width={["100%", "300px"]} mr="10px">
            <Box>
              <Flex justify={"center"} align="center" className="box">
                <span>
                  <img src={me} alt="me" />
                </span>
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </section>
  );
};
