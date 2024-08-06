import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HostHome from "./Home";
import About from "./About";

// Importing the remote component
const RemoteApp = React.lazy(() => import("remoteApp/App"));

const App = () => (
  <Router>
    <React.Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<HostHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/remote/*" element={<RemoteApp />} />
      </Routes>
    </React.Suspense>
  </Router>
);

export default App;
