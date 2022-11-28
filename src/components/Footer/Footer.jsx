import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";
import bg from "../../Assets/g2.jpeg";
import cv from "../../Assets/cv.pdf";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  SiGmail,
  SiGithub,
  SiHackerrank,
  SiLinkedin,
  SiLeetcode,
} from "react-icons/si";
export const Footer = () => {
  return (
    <Box
      position={"relative"}
      bgImage={bg}
      bgSize={["auto 100%", "100% 100%"]}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      h="max-content"
      py="20px"
      pb="120px"
    >
      <Flex justify={"center"} align="center" px="10px" color={"whatsapp.100"}>
        <Link href="#" fontSize={"28px"}>
          Home
        </Link>
      </Flex>
      <Flex
        flexDir={["row", "column"]}
        justify={["space-between", "center"]}
        align={"center"}
        px="20px"
        py="20px"
        gap="20px"
      >
        <Flex
          flexDir={["column", "row"]}
          gap="20px"
          px="10px"
          color={"whatsapp.100"}
        >
          <Link href="#about">About</Link>
          <Link href="#skill">Skill</Link>
          <Link href="#project">Project</Link>
          <Link href="#contact">Contact</Link>
          <Link href={cv} download>
            Resume
          </Link>
        </Flex>

        <Flex
          flexDir={["column", "row"]}
          gap={"20px"}
          px="10px"
          color={"whatsapp.100"}
        >
          <Link href="https://wa.me/918249816465" target={"_blank"}>
            <HStack>
              <FaWhatsapp />
              <Box>
                <span>+91</span> 8249816465
              </Box>
            </HStack>
          </Link>
          <Link href="tel:+918249816465" target={"_blank"}>
            <HStack>
              <FaPhoneAlt />
              <Box>
                <span>+91</span> 8249816465
              </Box>
            </HStack>
          </Link>
          <Link href="mailto:sarojpahi@gmail.com" target={"_blank"}>
            <HStack>
              <SiGmail />
              <Box>sarojpahi@gmail.com</Box>
            </HStack>
          </Link>
        </Flex>
      </Flex>
      <Flex
        justify={"center"}
        align="center"
        gap={"25px"}
        pb="20px"
        color={"whatsapp.100"}
      >
        <Link
          fontSize={"3xl"}
          href="https://github.com/sarojpahi"
          target={"_blank"}
        >
          <SiGithub />
        </Link>
        <Link
          fontSize={"3xl"}
          href="https://leetcode.com/sarojpahi/"
          target={"_blank"}
        >
          <SiLeetcode />
        </Link>
        <Link
          fontSize={"3xl"}
          href="https://www.hackerrank.com/sarojpahi"
          target={"_blank"}
        >
          <SiHackerrank />
        </Link>
        <Link
          fontSize={"3xl"}
          href="https://www.linkedin.com/in/sarojpahi"
          target={"_blank"}
        >
          <SiLinkedin />
        </Link>
      </Flex>
      <Box color={"white"} textAlign="center">
        &copy; Saroj Kumar Pahi
      </Box>
    </Box>
  );
};
