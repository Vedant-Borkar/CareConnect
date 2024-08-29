import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, "events");
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsList = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  const registerForEvent = async (eventId, userId) => {
    try {
      const userRef = doc(db, "users", userId);

      // Fetch the user document
      const userSnap = await getDocs(userRef);

      // If user document does not exist, create it
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          registeredEvents: [eventId],
        });
      } else {
        // If it exists, update the registeredEvents field
        await updateDoc(userRef, {
          registeredEvents: arrayUnion(eventId),
        });
      }

      setMessage("Successfully registered for the event!");
    } catch (error) {
      console.error("Error registering for event:", error.message);
      setMessage("Failed to register for the event. Please try again.");
    }
  };

  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <button onClick={() => registerForEvent(event.id, "USER_ID_HERE")}>
            Register
          </button>
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default EventsPage;
