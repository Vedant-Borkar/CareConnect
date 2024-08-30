import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Pages/FireBaseAuth";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">NGO Profile</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NGO Name:</h3>
          <p>{ngoData.ngoName}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NGO ID:</h3>
          <p>{ngoData.ngoId}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NGO License:</h3>
          <p>{ngoData.ngoLicense}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email:</h3>
          <p>{ngoData.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact No:</h3>
          <p>{ngoData.contactNo}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Address:</h3>
          <p>{ngoData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
