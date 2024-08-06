import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
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
      <button>Remote Button</button>
      <div>
        <Link to="/">go to host home</Link>
      </div>
    </div>
  );
};

export default Button;
