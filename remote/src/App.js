import React from "react";
import { Routes, Route } from "react-router-dom";

import Button from "./Button";
import Home from "./Home";

const App = () => (
  <React.Suspense fallback="Loading...">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/remoteButton" element={<Button />} />
    </Routes>
  </React.Suspense>
);

export default App;
