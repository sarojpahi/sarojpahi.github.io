import "./Nav.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "@chakra-ui/react";
export const Nav2 = () => {
  return (
    <nav style={{ right: 0, left: "-5rem" }}>
      <Link id="link" href="#">
        <BsLinkedin />
      </Link>
      <Link id="link" href="#about">
        <FaGithub />
      </Link>
      <Link id="link" href="#exp">
        <SiLeetcode />
      </Link>
      <Link id="link" href="#exp">
        <FaHackerrank />
      </Link>
    </nav>
  );
};
