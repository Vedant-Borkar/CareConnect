import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = "user-id"; // Replace with the actual logged-in user's ID

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const q = query(
          collection(db, "eventRegistrations"),
          where("userId", "==", userId)
        );
        const querySnapshot = await getDocs(q);
        const userEvents = querySnapshot.docs.map((doc) => doc.data());
        setEvents(userEvents);
        console.log(userEvents); // Debugging line to ensure events are fetched correctly
      } catch (error) {
        console.error("Error fetching user events:", error.message);
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchUserEvents();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">User Profile</h2>
        {events.length > 0 ? (
          <ul className="list-disc pl-5">
            {events.map((event) => (
              <li key={event.eventId} className="mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
                {/* Link to join the chat room */}
                <Link
                  to={`/chat/${event.chatRoomId}`}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Join Chat Room
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No registered events found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
