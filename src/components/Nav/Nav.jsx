import React from "react";
import "./Nav.css";
import {
  AiOutlineFilePdf,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import cv from "../../Assets/Saroj_Kumar_Pahi_Resume.pdf";
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
          dataname="Home"
        >
          <AiOutlineHome />
        </Link>
        <Link
          id="link"
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
          dataname="About"
        >
          <AiOutlineUser />
        </Link>
        <Link
          id="link"
          href="#skill"
          onClick={() => setActiveNav("#skill")}
          className={activeNav === "#skill" ? "active" : ""}
          dataname="Skills"
        >
          <BiBook />
        </Link>
        <Link
          id="link"
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
          dataname="Projects"
        >
          <AiOutlineFundProjectionScreen />
        </Link>
        <Link
          id="link"
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
          dataname="Contact"
        >
          <BiMessageSquareDetail />
        </Link>
        <Link
          id="link"
          href={cv}
          target="_blank"
          onClick={() => setActiveNav("#resume")}
          className={activeNav === "#resume" ? "active" : ""}
          dataname="Resume"
        >
          <AiOutlineFilePdf />
        </Link>
      </nav>
    </Box>
  );
};
