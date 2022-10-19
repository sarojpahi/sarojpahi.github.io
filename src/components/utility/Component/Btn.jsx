import "../Style/Btn.css";
import cv from "../../../Assets/cvlatest.pdf";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
export const Btn = ({ name, color }) => {
  const cls = useBreakpointValue({
    base: "btn1",
    md: "btn",
  });
  const cls1 = useBreakpointValue({
    base: "btn1",
    md: "btn2",
  });
  return (
    <Flex align={"center"} justify="space-between" gap={20}>
      <Box className={cls} style={{ "--clr": color ? color : "blue" }}>
        <a href={cv} download>
          <span>{name ? name : "Button"}</span>
          <i></i>
        </a>
      </Box>
      <Box className={cls1} style={{ "--clr": color ? color : "blue" }}>
        <a href="#contact">
          <span>Contact</span>
        </a>
      </Box>
    </Flex>
  );
};
