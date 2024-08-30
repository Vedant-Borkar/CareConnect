import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router here
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
import Donations from "./Pages/Donations";
import Dashboard from "./Pages/UserDashboard";
import UserDashboard from "./Pages/UserDashboard";
import NgoDashboard from "./Pages/NgoDashboard";
import UserEvents from "./Pages/UserEvents";
import NgoInventory from "./Pages/NgoInventory";
import NgoEvents from "./Pages/NgoEvents";
import ChatRoom from "./Pages/ChatRoom";
import User_Profile from "./Pages/User_Profile";
import EventDonation from "./components/EventDonation";

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
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/ngodashboard" element={<NgoDashboard />} />
          {/* <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregister" element={<UserRegister />} /> */}
          <Route path="/events" element={<EventsPage />} />
          {/* <Route path="/donations" element={<Donations/>} />
          <Route path="/course" element={<Course />} />
                    <Route path="payment" element={<StripePayment />} />
                    <Route path="success" element={<PaymentSuccess />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userevents" element={<UserEvents />} />
          <Route path="/ngoinventory" element={<NgoInventory />} />
          <Route path="/ngoevents" element={<NgoEvents />} />
          <Route path="/user-profile" element={<User_Profile />} />
          <Route path="/chat/:roomId" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
