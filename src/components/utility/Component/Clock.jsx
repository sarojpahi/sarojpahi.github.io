import React, { useEffect, useState } from "react";
import "../Style/Clock.css";
export const Clock = () => {
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [h, setH] = useState(0);
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
    <div className="timecont">
      {h ? (
        <div id="time">
          <div
            className="circle"
            style={{
              stroke: "#ff2972",
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
              stroke: "#fee800",
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
              stroke: "#04fc43",
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
              style={{ color: "#04fc43", textShadow: "0 0 10px #04fc43" }}
              className="h"
            >
              {h < 10 ? "0" + h : h > 12 ? "0" + (h - 12) : h}
            </div>
            <div
              style={{ color: "#fee800", textShadow: "0 0 10px #fee800" }}
              className="h"
            >
              {m < 10 ? "0" + m : m}
            </div>
            <div style={{ color: "#ff2972", textShadow: "0 0 10px #ff2972" }}>
              {s < 10 ? "0" + s : s}
            </div>
            <div style={{ color: "white" }} className="t2">
              {h >= 12 ? "PM" : "AM"}
            </div>
          </div>
        </div>
      ) : (
        <h2 style={{ color: "red" }}>Loading...</h2>
      )}
    </div>
  );
};
