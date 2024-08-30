import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const UserSidebar = () => {
  const location = useLocation();
  const userData = location.state?.userData; // Access user data passed through state

  return (
    <div className="bg-gray-900 w-64 h-screen p-6 shadow-md flex flex-col">
      <div className="mb-8">
        <img
          src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-center mt-4 text-xl font-bold text-white">Volunteer</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        <NavLink
          exact
          to="/userprofile"
          className="text-lg font-medium text-gray-300 hover:text-white"
          activeClassName="text-white"
        >
          Profile
        </NavLink>
        <NavLink
          to="/userevents"
          className="text-lg font-medium text-gray-300 hover:text-white"
          activeClassName="text-white"
        >
          Events
        </NavLink>

        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default UserSidebar;
