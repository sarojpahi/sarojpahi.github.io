import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../Style/GmContact.css";
import { Alert } from "./Alert";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { zoomIn } from "./motion";
export const GmContact = ({ display, onC, isO }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d78r4ac",
        "template_qgyz1nf",
        form.current,
        "F8UhZka662eCUW5Xi"
      )
      .then(
        () => {
          onOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.div
      variants={zoomIn(0.5, 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <Flex
        as={"form"}
        ref={form}
        display={display}
        justify={"center"}
        align="center"
        minH={"100vh"}
        w="100%"
        p={["0", "20px"]}
        className="gmcbox"
        position={"absolute"}
        top="0"
        left={"0"}
        onSubmit={sendEmail}
      >
        <Alert isOpen={isOpen} onClose={onClose} />
        <div className="gmcontainer">
          <Box
            pos={"absolute"}
            top={"10px"}
            right={"10px"}
            color="white"
            cursor={"pointer"}
            onClick={onC}
            fontSize="24px"
            fontWeight={"bold"}
            _hover={{
              color: "#1e9bff",
            }}
            display={isO ? "block" : "none"}
          >
            <AiOutlineClose />
          </Box>
          <Heading
            fontWeight={"400"}
            fontSize="36px"
            color={"#fff"}
            textAlign="center"
            textDecoration={"underline"}
            textUnderlineOffset="5px"
          >
            Contact Me
          </Heading>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <Input type="text" required="required" name="first_name" />
                <span className="text">First Name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <Input type="text" required="required" name="last_name" />
                <span className="text">Last Name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <Input type="email" required="required" name="email" />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <Input type="text" required="required" name="mobile" />
                <span className="text">Mobile</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <Box className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <Textarea
                  required="required"
                  placeholder=""
                  resize={"none"}
                  w="full"
                  name="message"
                ></Textarea>
                <span className="text">Type Your Message Here...</span>
                <span className="line"></span>
              </div>
            </div>
          </Box>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </Flex>
    </motion.div>
  );
};
