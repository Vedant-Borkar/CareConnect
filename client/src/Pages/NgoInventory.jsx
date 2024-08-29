import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct

const NgoInventory = () => {
  const [ngoData, setNgoData] = useState(null);
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: "" });
  const [showInventory, setShowInventory] = useState(false);

  useEffect(() => {
    // Retrieve NGO data from session storage
    const storedNgoData = sessionStorage.getItem("ngoData");
    if (storedNgoData) {
      const parsedNgoData = JSON.parse(storedNgoData);
      setNgoData(parsedNgoData);

      // Fetch events added by this NGO
      fetchNgoEvents(parsedNgoData.id);
    }
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const inventorySnapshot = await getDocs(collection(db, "inventory"));
      const inventoryList = inventorySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInventory(inventoryList);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setMessage("Failed to fetch inventory. Please try again.");
    }
  };

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

  const handleAddInventory = async () => {
    try {
      await addDoc(collection(db, "inventory"), {
        ...newItem,
        ngoId: ngoData.id,
      });
      setMessage("Inventory item added successfully!");
      setNewItem({ name: "", quantity: "" });
      fetchInventory();
    } catch (error) {
      console.error("Error adding inventory item:", error);
      setMessage("Failed to add inventory item. Please try again.");
    }
  };

  const handleDeleteInventory = async (itemId) => {
    try {
      await deleteDoc(doc(db, "inventory", itemId));
      setMessage("Inventory item deleted successfully!");
      fetchInventory();
    } catch (error) {
      console.error("Error deleting inventory item:", error);
      setMessage("Failed to delete inventory item. Please try again.");
    }
  };

  const handleRequestInventory = async (itemName) => {
    try {
      await addDoc(collection(db, "inventoryRequests"), {
        itemName,
        ngoId: ngoData.id,
        ngoName: ngoData.ngoName,
        status: "pending",
      });
      setMessage(`Request for ${itemName} submitted successfully!`);
    } catch (error) {
      console.error("Error requesting inventory item:", error);
      setMessage("Failed to submit inventory request. Please try again.");
    }
  };

  if (!ngoData) {
    return <p>Loading...</p>;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <button
        onClick={() => setShowInventory(!showInventory)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        {showInventory ? "Hide Inventory" : "View Inventory"}
      </button>

      {showInventory && (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
          <h3 className="text-xl font-bold mb-4">Inventory Management</h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) =>
                setNewItem({ ...newItem, quantity: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <button
              onClick={handleAddInventory}
              className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
            >
              Add Item
            </button>
          </div>
          <ul>
            {inventory.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {item.name} - {item.quantity}
                </span>
                <div>
                  <button
                    onClick={() => handleDeleteInventory(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleRequestInventory(item.name)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
                  >
                    Request
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {message && <p className="text-center text-green-600 mb-4">{message}</p>}
    </div>
  );
};

export default NgoInventory;
