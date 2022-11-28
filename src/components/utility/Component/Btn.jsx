import "../Style/Btn.css";
import cv from "../../../Assets/Saroj_Kumar_Pahi_Resume.pdf";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
export const Btn = ({ name, color, onClick }) => {
  const cls = useBreakpointValue({
    base: "btn1",
    md: "btn",
  });
  const cls1 = useBreakpointValue({
    base: "btn1",
    md: "btn2",
  });
  return (
    <Flex align={"center"} justify="center" gap="15px" w="100%">
      <Box className={cls} style={{ "--clr": color ? color : "blue" }}>
        <a href={cv} download>
          <span>{name ? name : "Button"}</span>
          <i></i>
        </a>
      </Box>
      <Box className={cls1} style={{ "--clr": color ? color : "blue" }}>
        <button href="" onClick={onClick}>
          <span>Contact</span>
        </button>
      </Box>
    </Flex>
  );
};
