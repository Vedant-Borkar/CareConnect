import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct
import Event from "../components/Event";

const NgoProfile = () => {
  const [ngoData, setNgoData] = useState(null);
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState([]); // State to store events added by the NGO

  useEffect(() => {
    // Retrieve NGO data from session storage
    const storedNgoData = sessionStorage.getItem("ngoData");
    if (storedNgoData) {
      const parsedNgoData = JSON.parse(storedNgoData);
      setNgoData(parsedNgoData);

      // Fetch events added by this NGO
      fetchNgoEvents(parsedNgoData.id);
    }
  }, []);

  const fetchNgoEvents = async (ngoId) => {
    try {
      const eventsQuery = query(
        collection(db, "events"),
        where("ngoId", "==", ngoId)
      );
      const eventsSnapshot = await getDocs(eventsQuery);
      const eventsList = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsList);
    } catch (error) {
      console.error("Error fetching NGO events:", error.message);
    }
  };

  const handleEventSubmit = async (eventData) => {
    try {
      // Add the event to Firestore under the 'events' collection
      await addDoc(collection(db, "events"), {
        ...eventData,
        ngoId: ngoData.id, // Associate event with the logged-in NGO
      });

      setMessage("Event created successfully!");
      // Fetch the updated list of events after adding a new event
      fetchNgoEvents(ngoData.id);
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

      {message && <p>{message}</p>}

      {/* Render the Event component for creating new events */}
      <Event onEventSubmit={handleEventSubmit} />

      {/* Render the list of events added by the NGO */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Events Added by NGO
        </h2>
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <ul className="list-disc pl-5">
            {events.map((event) => (
              <li key={event.id} className="mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NgoProfile;
