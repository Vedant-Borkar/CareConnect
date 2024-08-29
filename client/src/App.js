import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NgoLogin from "./Pages/Ngo_Login";
import Home from "./Pages/Home";
import UserLogin from "./Pages/User_Login";  // Import the UserLogin component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NgoLogin />} />
        <Route path="/userlogin" element={<UserLogin />} /> {/* Add the UserLogin route */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
