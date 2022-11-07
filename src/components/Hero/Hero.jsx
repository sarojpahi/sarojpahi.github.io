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
    <Box h={["max-content", "100vh"]} w={"100%"} bg={bg} transition="0.5s">
      <VStack className="name" gap={"15px"} pt="2rem">
        <VStack align={"flex-start"} px="5px">
          <Text textAlign="left">Hi I'm</Text>
          <Heading fontSize={"2.8rem"}>Saroj Kumar Pahi</Heading>
          <Text>Full Stack Web Developer</Text>
        </VStack>
        <Box>
          <Gbtn onToggle={onToggle} />
        </Box>
        <Flex
          position={"relative"}
          top="25px"
          align={"center"}
          justify="center"
          minW="250px"
          minH="250px"
        >
          <Clock />
        </Flex>
      </VStack>

      <Box width={"50%"} m="30px auto">
        <div className="social">
          <ul className="sci">
            <li data-text="Github" style={{ "--clr": bg }}>
              <a
                className="github"
                href="https://github.com/sarojpahi"
                target={"_blank"}
                rel="noreferrer"
                onMouseEnter={() => setBg("#0aacf5")}
                onMouseLeave={() => setBg("")}
              >
                <i>
                  <SiGithub />
                </i>
              </a>
            </li>
            <li data-text="Leetcode">
              <a
                className="leetcode"
                href="https://leetcode.com/sarojpahi/"
                target={"_blank"}
                rel="noreferrer"
                onMouseEnter={() => setBg("#e5a82c")}
                onMouseLeave={() => setBg("")}
              >
                <i>
                  <SiLeetcode />
                </i>
              </a>
            </li>
            <li data-text="Hackerrank">
              <a
                className="hackerrank"
                href="https://www.hackerrank.com/sarojpah"
                target={"_blank"}
                rel="noreferrer"
                onMouseEnter={() => setBg("#27b75a")}
                onMouseLeave={() => setBg("")}
              >
                <i>
                  <SiHackerrank />
                </i>
              </a>
            </li>
            <li data-text="Linkedin">
              <a
                className="linkedin"
                href="linkedin.com/in/sarojpahi/"
                target={"_blank"}
                rel="noreferrer"
                onMouseEnter={() => setBg("#0A66C2")}
                onMouseLeave={() => setBg("")}
              >
                <i>
                  <FaLinkedinIn />
                </i>
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
    </Box>
  );
};
