import React from "react";
import { CTA } from "./CTA";
import "./Hero.css";
import me from "../../Assets/me.png";
import { HeroIcons } from "./HeroIcons";
export const Hero = () => {
  return (
    <header>
      <div className="container hero_container">
        <h5>Hello I'm</h5>
        <h1>Saroj Kumar Pahi</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeroIcons />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className="scrollDown">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
