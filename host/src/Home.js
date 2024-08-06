import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Host Home
      <div>
        <Link to="/remote/">go to remote home</Link>
      </div>
      <div>
        <Link to="/about">go to host about</Link>
      </div>
    </div>
  );
};

export default Home;
