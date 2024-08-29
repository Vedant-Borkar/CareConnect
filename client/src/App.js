import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Event from "./components/Event";
import Testimonial from "./Pages/Testimonial";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Ngo_Register from "./Pages/Ngo_Register";
import Ngo_Login from "./Pages/Ngo_Login";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/ngo_register" element={<Ngo_Register />} />
          <Route path="/ngo_login" element={<Ngo_Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;