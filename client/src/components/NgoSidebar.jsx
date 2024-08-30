import React from 'react';
import { NavLink } from 'react-router-dom';

const NgoSidebar = () => {
  return (
    <div className="bg-white w-64 h-screen p-6 shadow-md flex flex-col">
      <div className="mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-center mt-4 text-xl font-bold">Admin Name</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        <NavLink
          exact
          to="/ngo-profile"
          className="text-lg font-medium hover:text-blue-600"
          activeClassName="text-blue-600"
        >
          Profile
        </NavLink>
        <NavLink
          to="/ngoevents"
          className="text-lg font-medium hover:text-blue-600"
          activeClassName="text-blue-600"
        >
          Events
        </NavLink>
        <NavLink
          to="/ngoinventory"
          className="text-lg font-medium hover:text-blue-600"
          activeClassName="text-blue-600"
        >
          Inventory
        </NavLink>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
};

export default NgoSidebar;
