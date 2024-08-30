import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../FireBaseAuth"; // Ensure this path is correct

const RegisteredUsers = () => {
  const { eventId } = useParams();
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const eventDoc = await getDoc(doc(db, "events", eventId));
        if (eventDoc.exists()) {
          const eventData = eventDoc.data();
          const usersQuery = query(
            collection(db, "users"),
            where("registeredEvents", "array-contains", eventId)
          );
          const usersSnapshot = await getDocs(usersQuery);
          const usersList = usersSnapshot.docs.map((doc) => {
            const userData = doc.data();
            return {
              id: doc.id,
              name: userData.name,
              registeredTime: userData.registeredTime || "Unknown",
              location: userData.location || "Unknown",
            };
          });
          setRegisteredUsers(usersList);
          console.log(registeredUsers);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching registered users:", error.message);
        setLoading(false);
      }
    };

    fetchRegisteredUsers();
  }, [eventId]);

  if (loading) {
    return <div>Loading registered users...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Registered Users</h2>
      {registeredUsers.length === 0 ? (
        <p className="text-center">No users registered for this event.</p>
      ) : (
        <ul className="list-disc pl-5">
          {registeredUsers.map((user) => (
            <li key={user.id} className="mb-4">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">
                <strong>Registered Time:</strong> {user.registeredTime}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {user.city}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegisteredUsers;
