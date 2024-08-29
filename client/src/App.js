import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NgoLogin from "./Pages/Ngo_Login";

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
