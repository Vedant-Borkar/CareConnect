import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <div className="text-center mb-8">
          <img
            src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png" // Placeholder profile icon
            alt="NGO Logo"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
          />
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
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
            <button className="bg-black text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-200 transform hover:-translate-y-1">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NgoProfile;
