import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"; // Adjust the import path if necessary

// Import the components for each route
import Home from "./Pages/Home";
import Event from "./components/Event";
import Testimonial from "./Pages/Testimonial";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Ngo_Register from "./Pages/Ngo_Register";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/ngo_register" element={<Ngo_Register />} />
      </Routes>
    </Router>
  );
};

export default App;
