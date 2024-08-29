import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Event from "./components/Event";
import Testimonial from "./Pages/Testimonial";
import SignIn from "./Pages/SignIn";
import ProfileSettings from "./Pages/ProfileSettings";
import UserProfile from "./Pages/UserProfile";
import NgoProfile from "./Pages/Ngo_Profile";
import SignUp from "./Pages/SignUp";
import EventsPage from "./Pages/EventsPage";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/ngo_register" element={<Ngo_Register />} /> */}
          <Route path="/ngo-profile" element={<NgoProfile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          {/* <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<UserRegister />} /> */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
