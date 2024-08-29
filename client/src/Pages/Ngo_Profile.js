import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./FireBaseAuth"; // Ensure this path is correct
import Event from "../components/Event";

const NgoProfile = () => {
  const [ngoData, setNgoData] = useState(null);
  const [message, setMessage] = useState("");
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: "" });
  const [showInventory, setShowInventory] = useState(false);

  useEffect(() => {
    // Retrieve NGO data from session storage
    const storedNgoData = sessionStorage.getItem("ngoData");
    if (storedNgoData) {
      setNgoData(JSON.parse(storedNgoData));
    }
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const inventorySnapshot = await getDocs(collection(db, "inventory"));
      const inventoryList = inventorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInventory(inventoryList);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setMessage("Failed to fetch inventory. Please try again.");
    }
  };

  const handleEventSubmit = async (eventData) => {
    try {
      await addDoc(collection(db, "events"), {
        ...eventData,
        ngoId: ngoData.id,
      });
      setMessage("Event created successfully!");
    } catch (error) {
      console.error("Error creating event:", error.message);
      setMessage("Failed to create event. Please try again.");
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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
        <h2 className="text-2xl font-bold text-center mb-8">NGO Profile</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NGO Name:</h3>
          <p>{ngoData.ngoName}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NGO ID:</h3>
          <p>{ngoData.ngoId}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NGO License:</h3>
          <p>{ngoData.ngoLicense}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email:</h3>
          <p>{ngoData.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact No:</h3>
          <p>{ngoData.contactNo}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Address:</h3>
          <p>{ngoData.address}</p>
        </div>
      </div>

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
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
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
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} - {item.quantity}</span>
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

      <Event onEventSubmit={handleEventSubmit} />
    </div>
  );
};

export default NgoProfile;