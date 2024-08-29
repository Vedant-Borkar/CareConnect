import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Cover Photo */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/728x150" 
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
            src="https://via.placeholder.com/80" 
            alt="Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">Rachel Derek</h2>
            <p className="text-sm text-gray-500">UI/UX Designer@spotify</p>
            <p className="text-sm text-gray-500">Sylhet, Bangladesh</p>
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
            <span className="text-gray-700">Personal Meeting ID</span>
            <span className="text-gray-900 font-medium">231-342-3245</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Email</span>
            <span className="text-gray-900 font-medium">rachel@callme.io</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Subscription Type</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-900 font-medium">Basic User</span>
              <a href="#" className="text-blue-600 hover:underline">Upgrade</a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Time Zone</span>
            <span className="text-gray-900 font-medium">(GMT+6:00) Astana, Dhaka</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Language</span>
            <span className="text-gray-900 font-medium">English</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Password</span>
            <span className="text-gray-900 font-medium">********</span>
            <a href="#" className="text-blue-600 hover:underline">Edit</a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Device</span>
            <a href="#" className="text-blue-600 hover:underline">Sign Out From All Devices</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
