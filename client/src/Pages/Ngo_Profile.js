import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct

import Event from "../components/Event";
const NgoProfile = () => {
  const [ngoData, setNgoData] = useState(null);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    // Retrieve NGO data from session storage
    const storedNgoData = sessionStorage.getItem("ngoData");
    if (storedNgoData) {
      setNgoData(JSON.parse(storedNgoData));
    }
  }, []);

  const handleEventChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the event to Firestore under the 'events' collection
      await addDoc(collection(db, "events"), {
        ...eventData,
        ngoId: ngoData.id, // Associate event with the logged-in NGO
      });

      setMessage("Event created successfully!");
      // Clear form fields after submission
      setEventData({
        title: "",
        description: "",
        date: "",
        location: "",
      });
    } catch (error) {
      console.error("Error creating event:", error.message);
      setMessage("Failed to create event. Please try again.");
    }
  };

  if (!ngoData) {
    return <p>Loading...</p>; // Display a loading state while fetching data
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
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

      <Event />
    </div>
  );
};

export default NgoProfile;
