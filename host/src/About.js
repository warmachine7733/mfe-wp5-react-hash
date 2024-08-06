import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "30vh",
      }}
    >
      Host About
      <Link to="/">go to host home</Link>
    </div>
  );
};

export default About;
