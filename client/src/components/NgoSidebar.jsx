import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
const NgoSidebar = () => {
  const [ngoData, setNgoData] = useState(null);

  useEffect(() => {
    // Retrieve NGO data from session storage
    const storedNgoData = sessionStorage.getItem("ngoData");
    if (storedNgoData) {
      const parsedNgoData = JSON.parse(storedNgoData);
      setNgoData(parsedNgoData);
    }
  }, []);

  if (!ngoData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white w-64 h-screen p-6 shadow-md flex flex-col">
      <div className="mb-8">
        <img
          src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-center mt-4 text-xl font-bold">{ngoData.ngoName}</h2>
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
