import React from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const userData = location.state?.userData; // Access user data passed through state

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">User Profile</h2>
        {userData ? (
          <div>
            <p>
              <strong>Username:</strong> {userData.username}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Mobile Number:</strong> {userData.mobileNumber}
            </p>
            <p>
              <strong>City:</strong> {userData.city}
            </p>
            <p>
              <strong>Pincode:</strong> {userData.pincode}
            </p>
          </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
