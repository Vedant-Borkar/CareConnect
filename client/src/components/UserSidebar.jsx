import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const UserSidebar = () => {
  const location = useLocation();
  const userData = location.state?.userData; // Access user data passed through state

  return (
    <div className="bg-white w-64 h-screen p-6 shadow-md flex flex-col">
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-center mt-4 text-xl font-bold">Volunteer</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        <NavLink
          exact
          to="/userprofile"
          className="text-lg font-medium hover:text-blue-600"
          activeClassName="text-blue-600"
        >
          Profile
        </NavLink>
        <NavLink
          to="/userevents"
          className="text-lg font-medium hover:text-blue-600"
          activeClassName="text-blue-600"
        >
          Events
        </NavLink>
        
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default UserSidebar;
