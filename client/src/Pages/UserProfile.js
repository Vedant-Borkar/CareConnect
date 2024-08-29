import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth";
import { useNavigate } from "react-router-dom"; // Importing db from FireBaseAuth


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve user data from session storage
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  if (!userData) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">User Profile</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Username:</h3>
          <p>{userData.username}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email:</h3>
          <p>{userData.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Mobile Number:</h3>
          <p>{userData.mobileNumber}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">City:</h3>
          <p>{userData.city}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Pincode:</h3>
          <p>{userData.pincode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;