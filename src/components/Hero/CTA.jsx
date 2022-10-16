import React from "react";
import cv from "../../Assets/cv.pdf";
export const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn cv">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};
