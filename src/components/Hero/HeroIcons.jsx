import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
export const HeroIcons = () => {
  return (
    <div className="heroIcons">
      <a href="#linkdin">
        <BsLinkedin />
      </a>
      <a href="#github">
        <FaGithub />
      </a>
      <a href="#dribble">
        <FiDribbble />
      </a>
    </div>
  );
};
