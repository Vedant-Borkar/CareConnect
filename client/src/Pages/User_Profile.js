import React from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const userData = location.state?.userData; // Access user data passed through state

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Cover Photo */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/728x150" // Replace with actual cover photo URL or component
          alt="Cover"
          className="w-full h-40 object-cover"
        />
        <button className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-md">
          Upload Cover
        </button>
      </div>

      {/* Profile Details */}
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80" // Replace with actual user profile picture URL or component
            alt="Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{userData?.username || 'No Username'}</h2>
            <p className="text-sm text-gray-500">{userData?.email || 'No Email'}</p>
            <p className="text-sm text-gray-500">{userData?.city || 'No City'}</p>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Change
          </button>
          <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
            Delete
          </button>
        </div>

        {/* Info Fields */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Mobile Number</span>
            <span className="text-gray-900 font-medium">{userData?.mobileNumber || 'No Mobile Number'}</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">City</span>
            <span className="text-gray-900 font-medium">{userData?.city || 'No City'}</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Pincode</span>
            <span className="text-gray-900 font-medium">{userData?.pincode || 'No Pincode'}</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
