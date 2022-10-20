import { Box, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../Style/GmContact.css";
export const GmContact = ({ display, onClose, isOpen }) => {
  return (
    <Flex
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
    >
      <div className="gmcontainer">
        <Box
          pos={"absolute"}
          top={"10px"}
          right={"10px"}
          color="white"
          cursor={"pointer"}
          onClick={onClose}
          fontSize="24px"
          fontWeight={"bold"}
          _hover={{
            color: "#1e9bff",
          }}
          display={isOpen ? "block" : "none"}
        >
          <AiOutlineClose />
        </Box>
        <Heading
          fontWeight={"400"}
          fontSize="36px"
          color={"#fff"}
          textAlign="center"
        >
          Contact Me
        </Heading>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <Input type="text" required="required" name="" />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <Input type="text" required="required" name="" />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <Input type="text" required="required" name="" />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <Input type="text" required="required" name="" />
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
  );
};
