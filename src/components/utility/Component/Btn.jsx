import "../Style/Btn.css";
import cv from "../../../Assets/cvlatest.pdf";
import { Box, useBreakpointValue } from "@chakra-ui/react";
export const Btn = ({ name, color }) => {
  const cls = useBreakpointValue({
    base: "btn1",
    md: "btn",
  });

  return (
    <Box className={cls} style={{ "--clr": color ? color : "blue" }}>
      <a href={cv} download>
        <span>{name ? name : "Button"}</span>
        <i></i>
      </a>
    </Box>
  );
};
