import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Pages/FireBaseAuth";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [events, setEvents] = useState([]);
  const userId = "user-id"; // Replace with the actual logged-in user's ID

  useEffect(() => {
    const fetchUserEvents = async () => {
      const q = query(
        collection(db, "eventRegistrations"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const userEvents = querySnapshot.docs.map((doc) => doc.data());
      setEvents(userEvents);
    };

    fetchUserEvents();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">User Profile</h2>
        {events.length === 0 ? (
          <p>No registered events found.</p>
        ) : (
          <ul className="list-disc pl-5">
            {events.map((event) => (
              <li key={event.eventId} className="mb-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <a
                  href={`/chat/${event.chatRoomId}`}
                  className="text-blue-500 underline"
                >
                  Join Chat Room
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
