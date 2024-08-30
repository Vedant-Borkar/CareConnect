import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch events from Firestore
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "events");
        const eventSnapshot = await getDocs(eventsCollection);
        const eventsWithNgo = await Promise.all(
          eventSnapshot.docs.map(async (eventDoc) => {
            const eventData = eventDoc.data();
            const ngoDoc = await getDoc(doc(db, "ngos", eventData.ngoId));
            const ngoData = ngoDoc.exists()
              ? ngoDoc.data()
              : { ngoName: "Unknown NGO" };
            return { id: eventDoc.id, ...eventData, ngoName: ngoData.ngoName };
          })
        );
        setEvents(eventsWithNgo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error.message);
        setLoading(false);
      }
    };

    fetchEvents();

    // Fetch user data from session storage
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      console.log("No user data found in sessionStorage.");
    }
  }, []);

  const handleRegister = async (eventId) => {
    const userId = userData ? userData.id : "DEFAULT_USER_ID"; // Use a default user ID for testing
    if (!userId) {
      alert("You need to be logged in to register for events.");
      return;
    }

    try {
      // Add event to user's registered events in Firestore
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        registeredEvents: arrayUnion(eventId),
      });

      // Add user to event's registered users in Firestore
      const eventDocRef = doc(db, "events", eventId);
      await updateDoc(eventDocRef, {
        registeredUsers: arrayUnion(userId),
      });

      alert("Successfully registered for the event!");
    } catch (error) {
      console.error("Error registering for event:", error.message);
      alert("Failed to register for the event. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center mb-8">All Events</h2>
      {events.length === 0 ? (
        <p className="text-center">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">
                <strong>NGO:</strong> {event.ngoName}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Type:</strong> {event.eventType}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Description:</strong> {event.description}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> {event.location}
              </p>
              {event.location === "virtual" && event.virtualLink && (
                <p className="text-gray-600 mb-2">
                  <strong>Virtual Link:</strong>{" "}
                  <a
                    href={event.virtualLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.virtualLink}
                  </a>
                </p>
              )}
              <p className="text-gray-600">
                <strong>Contact:</strong> {event.contactName} -{" "}
                {event.contactEmail} - {event.contactPhone}
              </p>
              <button
                onClick={() => handleRegister(event.id)}
                className="bg-green-500 text-white py-2 px-4 rounded mt-4"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
