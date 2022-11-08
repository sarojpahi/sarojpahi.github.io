import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./Hero.css";
import { Clock } from "../utility/Component/Clock";
import { GmContact } from "../utility/Component/GmContact";
import { Gbtn } from "../utility/Component/Gbtn";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { useState } from "react";
export const Hero = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [bg, setBg] = useState("");
  return (
    <Box
      // h={["max-content", "max-content", "max-content", "100vh"]}
      h="100vh"
      w={"100%"}
      bg={bg}
      transition="0.5s"
    >
      <VStack className="name" justifyContent={"space-evenly"} h="full">
        <VStack align={"flex-start"} px="5px">
          <Flex flexDirection="column" py="10px">
            <Text textAlign="left">Hi I'm</Text>
            <Heading fontSize={"2.8rem"} mb="5px">
              Saroj Kumar Pahi
            </Heading>
            <Text>Full Stack Web Developer</Text>
          </Flex>
          <Box>
            <Gbtn onToggle={onToggle} />
          </Box>
        </VStack>
        <Flex position={"relative"} top="25px" minW="250px" minH="250px">
          <Clock bg={bg} />
        </Flex>
        <Box width={"50%"} pt="25px" h="250px">
          <div className="social">
            <ul className="sci">
              <li data-text="Github" style={{ "--clr": bg }}>
                <a
                  className="github"
                  href="https://github.com/sarojpahi"
                  target={"_blank"}
                  rel="noreferrer"
                  onMouseEnter={() => setBg("#1b1d39")}
                  onMouseLeave={() => setBg("")}
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
                  onMouseEnter={() => setBg("#e28743")}
                  onMouseLeave={() => setBg("")}
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
                  onMouseEnter={() => setBg("green")}
                  onMouseLeave={() => setBg("")}
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
                  onMouseEnter={() => setBg("#0A66C2")}
                  onMouseLeave={() => setBg("")}
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
      </VStack>
    </Box>
  );
};
