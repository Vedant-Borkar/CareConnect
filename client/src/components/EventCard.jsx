import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Pages/FireBaseAuth";
import { StreamChat } from "stream-chat";

const chatClient = new StreamChat("YOUR_STREAM_CHAT_API_KEY");

const EventCard = ({ eventId, title, description, tags = [], ngoId }) => {
  const [ngoData, setNgoData] = useState(null);

  useEffect(() => {
    const fetchNgoData = async () => {
      if (ngoId) {
        try {
          const ngoRef = doc(db, "ngos", ngoId);
          const ngoSnap = await getDoc(ngoRef);
          if (ngoSnap.exists()) {
            setNgoData(ngoSnap.data());
          }
        } catch (error) {
          console.error("Error fetching NGO data:", error.message);
        }
      }
    };

    fetchNgoData();
  }, [ngoId]);

  const handleRegister = async () => {
    // This should be replaced with the actual logged-in user's data
    const userId = "user-id";
    const userName = "user-name";
    const userToken = "user-token"; // Fetch or generate user token

    if (!chatClient.userID) {
      await chatClient.connectUser(
        {
          id: userId,
          name: userName,
        },
        userToken
      );
    }

    try {
      // Create a unique channel for the event
      const channel = chatClient.channel("messaging", `event-${eventId}`, {
        name: `${title} Chat Room`,
        members: [userId],
      });

      await channel.create();

      // Register the user for the event in Firestore
      await setDoc(doc(db, "eventRegistrations", `${eventId}-${userId}`), {
        eventId,
        userId,
        chatRoomId: channel.id,
      });

      alert("Registered successfully! A chat room has been created for you.");
    } catch (error) {
      console.error("Error registering for event:", error.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:border-2 hover:border-blue-500 hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center mb-4">{description}</p>
      {ngoData && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">
            Organized by: {ngoData.ngoName}
          </p>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={handleRegister}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Register for Event
      </button>
    </div>
  );
};

export default EventCard;
