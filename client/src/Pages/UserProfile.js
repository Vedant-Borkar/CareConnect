import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    return <p className="text-center mt-8 text-gray-700">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      {/* Profile Details */}
      <div className="p-6">
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={userData?.profilePhoto || "https://via.placeholder.com/80"} 
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{userData?.username || 'No Username'}</h2>
            <p className="text-md text-gray-600">{userData?.city || 'No City'}</p>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Change
          </button>
          <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-300">
            Delete
          </button>
        </div>

        {/* Info Fields */}
        <div className="space-y-4">
          {[
            { label: "Mobile Number", value: userData?.mobileNumber || 'No Mobile Number' },
            { label: "City", value: userData?.city || 'No City' },
            { label: "Pincode", value: userData?.pincode || 'No Pincode' },
            { label: "Email", value: userData?.email || 'No Email' },
            { label: "Password", value: '********' },
          ].map(({ label, value }) => (
            <div className="flex justify-between items-center border-b border-gray-300 pb-2" key={label}>
              <span className="text-gray-800 font-medium">{label}</span>
              <span className="text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
