import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Pages/FireBaseAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct
import Event from "../components/Event";

const NgoProfile = () => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full mb-8">
        <div className="text-center mb-6">
          <img
            src="/path-to-ngo-logo.png" // Replace with actual logo path or a placeholder
            alt="NGO Logo"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-300"
          />
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{ngoData.ngoName}</h2>
          <p className="text-gray-500">NGO ID: {ngoData.ngoId}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">License:</h3>
          <p className="text-gray-600">{ngoData.ngoLicense}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
          <p className="text-gray-600">{ngoData.email}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Contact No:</h3>
          <p className="text-gray-600">{ngoData.contactNo}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Address:</h3>
          <p className="text-gray-600">{ngoData.address}</p>
        </div>
        <div className="text-center">
          <Link to="/ngodashboard">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition duration-200">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
