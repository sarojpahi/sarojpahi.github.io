import React from "react";
import "./social.css";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
export const Social = () => {
  let list = document.querySelectorAll(".sci li");
  let bg = document.querySelector(".social");
  list.forEach((el) => {
    el.addEventListener("mouseenter", function (e) {
      let color = e.target.getAttribute();
    });
  });
  return (
    <div className="social">
      <ul className="sci">
        <li data-text="Github" data-color="#1877f2">
          <a className="github" href="https://github.com/sarojpahi">
            <i>
              <SiGithub />
            </i>
          </a>
        </li>
        <li data-text="Linkedin" data-color="#1877f2">
          <a className="linkedin" href="linkedin.com/in/sarojpahi/">
            <i>
              <FaLinkedinIn />
            </i>
          </a>
        </li>
        <li data-text="Leetcode" data-color="#1877f2">
          <a className="leetcode" href="https://leetcode.com/sarojpahi/">
            <i>
              <SiLeetcode />
            </i>
          </a>
        </li>
        <li data-text="Hackerrank" data-color="#1877f2">
          <a className="hackerrank" href="https://www.hackerrank.com/sarojpah">
            <i>
              <SiHackerrank />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};
