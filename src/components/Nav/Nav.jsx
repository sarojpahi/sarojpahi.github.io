import React from "react";
import "./Nav.css";
import {
  AiOutlineFilePdf,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import cv from "../../Assets/cv.pdf";
import { useState } from "react";
import { Box, Link } from "@chakra-ui/react";
export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Box>
      <nav>
        <Link
          id="link"
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </Link>
        <Link
          id="link"
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </Link>
        <Link
          id="link"
          href="#skill"
          onClick={() => setActiveNav("#skill")}
          className={activeNav === "#skill" ? "active" : ""}
        >
          <BiBook />
        </Link>
        <Link
          id="link"
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
        </Link>
        <Link
          id="link"
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </Link>
        <Link
          id="link"
          href={cv}
          download
          onClick={() => setActiveNav("#resume")}
          className={activeNav === "#resume" ? "active" : ""}
        >
          <AiOutlineFilePdf />
        </Link>
      </nav>
    </Box>
  );
};
