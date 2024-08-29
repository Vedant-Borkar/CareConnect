import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NgoLogin from "./Pages/Ngo_Login";
import Home from "./Pages/Home";

<script
  src="https://kit.fontawesome.com/392534d5aa.js"
  crossorigin="anonymous"
></script>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Change NgoLogin to <NgoLogin /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NgoLogin />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
