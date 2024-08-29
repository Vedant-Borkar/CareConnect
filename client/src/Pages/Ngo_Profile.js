import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct
import Event from "../components/Event";

const NgoProfile = () => {
  const [ngoData, setNgoData] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Retrieve NGO data from session storage
    const storedNgoData = sessionStorage.getItem("ngoData");
    if (storedNgoData) {
      setNgoData(JSON.parse(storedNgoData));
    }
  }, []);

  const handleEventSubmit = async (eventData) => {
    try {
      // Add the event to Firestore under the 'events' collection
      await addDoc(collection(db, "events"), {
        ...eventData,
        ngoId: ngoData.id, // Associate event with the logged-in NGO
      });

      setMessage("Event created successfully!");
    } catch (error) {
      console.error("Error creating event:", error.message);
      setMessage("Failed to create event. Please try again.");
    }
  };

  if (!ngoData) {
    return <p>Loading...</p>; // Display a loading state while fetching data
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Cover Photo */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/728x150" // Replace with actual cover photo
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
            src="https://via.placeholder.com/80" // Replace with NGO logo or relevant image
            alt="Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{ngoData.ngoName}</h2>
            <p className="text-sm text-gray-500">NGO ID: {ngoData.ngoId}</p>
            <p className="text-sm text-gray-500">Location: {ngoData.address}</p>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Update
          </button>
          <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
            Delete
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">License</span>
            <span className="text-gray-900 font-medium">{ngoData.ngoLicense}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Email</span>
            <span className="text-gray-900 font-medium">{ngoData.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Contact No</span>
            <span className="text-gray-900 font-medium">{ngoData.contactNo}</span>
          </div>
        </div>
      </div>

      {/* Event Section */}
      <div className="p-6 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Create Event</h3>
        {message && <p className="mb-4">{message}</p>}
        <Event onEventSubmit={handleEventSubmit} />
      </div>
    </div>
  );
};

export default NgoProfile;
