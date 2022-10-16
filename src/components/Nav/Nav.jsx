import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "@chakra-ui/react";
export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
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
        href="#exp"
        onClick={() => setActiveNav("#exp")}
        className={activeNav === "#exp" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        id="link"
        href="#ser"
        onClick={() => setActiveNav("#ser")}
        className={activeNav === "#ser" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        id="link"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};
