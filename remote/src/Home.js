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
        height: "30vh",
      }}
    >
      Remote Home
      <Link to="/">go to host home</Link>
    </div>
  );
};

export default Home;
