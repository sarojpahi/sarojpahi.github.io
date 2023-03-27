import { Box, Flex, useDisclosure, VStack } from "@chakra-ui/react";
import "./Hero.css";
import { GmContact } from "../utility/Component/GmContact";
import { Gbtn } from "../utility/Component/Gbtn";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { AnimatedCharacters } from "../utility/Component/TextAnimation";
export const Hero = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const placeholderText = [
    { type: "heading2", text: "Hi I'm" },
    { type: "heading1", text: "SAROJ KUMAR PAHI" },
    {
      type: "heading2",
      text: "Full Stack Web Developer",
    },
  ];
  const textContainer = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <Box h="100vh" w={"100%"} transition="0.5s">
      <Flex
        className="name"
        h="full"
        justify={"space-between"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <VStack align={"flex-start"} p="4%">
          <motion.div
            className="herotextbox"
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
            <div className="textContainer">
              {placeholderText.map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
              })}
            </div>
          </motion.div>
          <Box>
            <Gbtn onToggle={onToggle} />
          </Box>
        </VStack>
        <Box pt="25px" h="250px" pr={{ lg: "30px" }}>
          <div className="social">
            <ul className="sci">
              <li data-text="Github">
                <a
                  className="github"
                  href="https://github.com/sarojpahi"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiGithub />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Leetcode">
                <a
                  className="leetcode"
                  href="https://leetcode.com/sarojpahi/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiLeetcode />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Hackerrank">
                <a
                  className="hackerrank"
                  href="https://www.hackerrank.com/sarojpahi"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <SiHackerrank />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
              <li data-text="Linkedin">
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/sarojpahi"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Box className="gbtn">
                    <span>
                      <Box className="sicon">
                        <FaLinkedinIn />
                      </Box>
                    </span>
                  </Box>
                </a>
              </li>
            </ul>
          </div>
        </Box>
        <Box className="contactpos" zIndex={"1002"}>
          <GmContact
            display={isOpen ? "Flex" : "none"}
            onC={onClose}
            isO={isOpen}
          />
        </Box>
      </Flex>
    </Box>
  );
};
