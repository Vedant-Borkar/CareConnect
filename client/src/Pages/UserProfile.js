import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth";
import { useNavigate, Link } from "react-router-dom"; // Importing db from FireBaseAuth

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]); // State to store registered events
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from session storage
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);

      // Fetch user's registered events from Firestore
      fetchRegisteredEvents(parsedUserData.id);
    }
  }, []);

  const fetchRegisteredEvents = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userDocData = userDoc.data();
        const events = userDocData.registeredEvents || [];

        // Fetch details of each registered event
        const eventDetails = await Promise.all(
          events.map(async (eventId) => {
            const eventDocRef = doc(db, "events", eventId);
            const eventDoc = await getDoc(eventDocRef);
            return { id: eventDoc.id, ...eventDoc.data() };
          })
        );

        setRegisteredEvents(eventDetails);
      } else {
        console.log("No such user document!");
      }
    } catch (error) {
      console.error("Error fetching registered events:", error);
    }
  };

  if (!userData) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">User Profile</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Username:</h3>
          <p>{userData.username}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email:</h3>
          <p>{userData.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Mobile Number:</h3>
          <p>{userData.mobileNumber}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">City:</h3>
          <p>{userData.city}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Pincode:</h3>
          <p>{userData.pincode}</p>
        </div>
      </div>

      {/* Registered Events Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">
          Registered Events
        </h2>
        {registeredEvents.length === 0 ? (
          <p>No registered events found.</p>
        ) : (
          <ol className="list-decimal pl-5">
            {registeredEvents.map((event, index) => (
              <li key={event.id} className="mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
                <Link
                  to={`/chat/${event.chatRoomId}`}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Join Chat Room
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
