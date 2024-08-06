import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height:"30vh",
      }}
    >
      Host Home
      <div>
        <Link to="/remote/">go to remote home</Link>
      </div>
      <div>
        <Link to="/about">go to host about</Link>
      </div>
      <div>
        <Link to="/remote/remoteButton">go to remote button</Link>
      </div>
    </div>
  );
};

export default Home;
