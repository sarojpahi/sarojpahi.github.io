import React from "react";
import "../Style/Heroicons.css";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
export const Heroicons = () => {
  return (
    <div className="heroicon">
      <ul>
        <li style={{ "--i": 5, "--clr": "#6e5494" }}>
          <a href="https://github.com/sarojpahi">
            <span>
              <i>
                <SiGithub />
              </i>
            </span>
            Github
          </a>
        </li>
        <li style={{ "--i": 4, "--clr": "#0A66C2" }}>
          <a href="linkedin.com/in/sarojpahi/">
            <span>
              {" "}
              <i>
                <FaLinkedinIn />
              </i>
            </span>
            Linkedin
          </a>
        </li>
        <li style={{ "--i": 2, "--clr": "#E8A519" }}>
          <a href="https://leetcode.com/sarojpahi/">
            <span>
              <i>
                <SiLeetcode />
              </i>
            </span>
            Leetcode
          </a>
        </li>
        <li style={{ "--i": 1, "--clr": "#00EA64" }}>
          <a href="https://www.hackerrank.com/sarojpah">
            <span>
              <i>
                <SiHackerrank />
              </i>
            </span>
            Hackerrank
          </a>
        </li>
      </ul>
    </div>
  );
};
