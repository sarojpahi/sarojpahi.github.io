import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../Style/Clock.css";
import { Loader } from "./Loader";
export const Clock = ({ bg }) => {
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [h, setH] = useState();
  let t = h;
  const getTime = () => {
    setInterval(() => {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      setH(h);
      setM(m);
      setS(s);
    }, 1000);
  };
  useEffect(() => {
    getTime();
  }, []);
  return (
    <Box
      className="timecont"
      borderRadius={"50%"}
      bg={bg ? bg : "#000000"}
      transition="0.5s"
    >
      {h !== undefined ? (
        <div id="time">
          <div
            className="circle"
            style={{
              stroke: "#FD0D0D",
              strokeDashoffset: `${760 - (760 * +s) / 60}`,
            }}
          >
            <div
              className="dot1"
              style={{ transform: `rotateZ(${+s * 6}deg)` }}
            ></div>
            <svg>
              <circle cx="120" cy="120" r="120"></circle>
            </svg>
          </div>
          <div
            className="circle"
            style={{
              stroke: "#32F905",
              strokeDashoffset: `${630 - (630 * +m) / 60}`,
            }}
          >
            <div
              className="dot2"
              style={{ transform: `rotateZ(${+m * 6}deg)` }}
            ></div>
            <svg>
              <circle cx="100" cy="100" r="100"></circle>
            </svg>
          </div>
          <div
            className="circle"
            style={{
              stroke: "#2C0EF0",
              strokeDashoffset: `${510 - (510 * (h > 12 ? h - 12 : h)) / 12}`,
            }}
          >
            <div
              className="dot3"
              style={{ transform: `rotateZ(${h * 30}deg)` }}
            ></div>
            <svg>
              <circle cx="80" cy="80" r="80"></circle>
            </svg>
          </div>
          <div className="timeBx">
            <div
              style={{ color: "#FD0D0D", textShadow: "0 0 10px #FD0D0D" }}
              className="h"
            >
              {(t = t > 12 ? t - 12 : t) < 10 ? "0" + t : t}
            </div>
            <div
              style={{ color: "#32F905", textShadow: "0 0 10px #32F905" }}
              className="h"
            >
              {m < 10 ? "0" + m : m}
            </div>
            <div style={{ color: "#2C0EF0", textShadow: "0 0 10px #2C0EF0" }}>
              {s < 10 ? "0" + s : s}
            </div>
            <div style={{ color: "white" }} className="t2">
              {h >= 12 ? "PM" : "AM"}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Box>
  );
};
