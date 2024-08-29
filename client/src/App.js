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
import Profile from "./Pages/Profile";
import ProfileSettings from "./Pages/ProfileSettings";
import UserProfile from "./Pages/UserProfile";
import NgoProfile from "./Pages/Ngo_Profile";
import UserLogin from "./Pages/User_Login";
import UserRegister from "./Pages/User_Register";

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/ngo_register" element={<Ngo_Register />} />
          <Route path="/ngo_login" element={<Ngo_Login />} /> */}
          <Route path="/ngo-profile" element={<NgoProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          {/* <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<UserRegister />} /> */}
        </Routes>
    </Router>
  );
};

export default App;
