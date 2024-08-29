import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct

const EventsDisplay = () => {
  const [events, setEvents] = useState([]); // State to store events

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "events"); // Reference to the 'events' collection
        const eventsSnapshot = await getDocs(eventsCollection); // Fetch all documents in the collection
        const eventsList = eventsSnapshot.docs.map((doc) => ({
          id: doc.id, // Include the document ID
          ...doc.data(), // Spread the document data
        }));
        setEvents(eventsList); // Update the state with the fetched events
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchEvents(); // Fetch events on component mount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 bg-black text-white">
      <div className="text-center mb-12 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Discover our exciting upcoming events that you don't want to miss.
          Join us for engaging activities and memorable experiences.
        </p>
      </div>
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {events.map((event) => (
          <EventCard
            key={event.id} // Use the document ID as the key
            title={event.title}
            description={event.description}
            tags={event.tags}
            ngoId={event.ngoId} // Include ngoId to fetch the NGO details
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/events">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:scale-105 hover:border-2 hover:border-blue-600 hover:shadow-lg">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventsDisplay;
