import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
    return <p className="text-center text-gray-700">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <div className="text-center mb-8">
          <img
            src="/path-to-ngo-logo.png" // Replace with actual logo path or a placeholder
            alt="NGO Logo"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-200"
          />
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
            {ngoData.ngoName}
          </h2>
          <p className="text-sm font-medium text-gray-500">NGO ID: {ngoData.ngoId}</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">License:</h3>
            <p className="text-gray-600">{ngoData.ngoLicense}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
            <p className="text-gray-600">{ngoData.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Contact No:</h3>
            <p className="text-gray-600">{ngoData.contactNo}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Address:</h3>
            <p className="text-gray-600">{ngoData.address}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/ngodashboard">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NgoProfile;
