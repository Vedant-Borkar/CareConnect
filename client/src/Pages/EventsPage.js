import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
