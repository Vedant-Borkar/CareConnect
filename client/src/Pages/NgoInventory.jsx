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
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve NGO data from session storage
        const storedNgoData = sessionStorage.getItem("ngoData");
        if (storedNgoData) {
          const parsedNgoData = JSON.parse(storedNgoData);
          setNgoData(parsedNgoData);
          await fetchInventory();
        }
      } catch (error) {
        console.error("Error loading NGO data:", error);
        setMessage("Failed to load NGO data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  const handleAddInventory = async () => {
    try {
      await addDoc(collection(db, "inventory"), {
        ...newItem,
        ngoId: ngoData.id,
      });
      setMessage("Inventory item added successfully!");
      setNewItem({ name: "", quantity: "" });
      await fetchInventory(); // Refresh inventory list
    } catch (error) {
      console.error("Error adding inventory item:", error);
      setMessage("Failed to add inventory item. Please try again.");
    }
  };

  const handleDeleteInventory = async (itemId) => {
    try {
      await deleteDoc(doc(db, "inventory", itemId));
      setMessage("Inventory item deleted successfully!");
      await fetchInventory(); // Refresh inventory list
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

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (!ngoData) {
    return <p className="text-center text-red-500">No NGO data found. Please log in again.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300 max-w-3xl w-full">
        <h3 className="text-2xl font-bold mb-6 text-black">Inventory Management</h3>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-black">Add New Inventory Item</h4>
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full p-3 border border-gray-300 bg-gray-100 rounded shadow-sm"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
              className="w-full p-3 border border-gray-300 bg-gray-100 rounded shadow-sm"
            />
            <button
              onClick={handleAddInventory}
              className="w-full p-3 bg-black text-white rounded hover:bg-gray-800 transition duration-300"
            >
              Add Item
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-black">Current Inventory</h4>
          {inventory.length === 0 ? (
            <p className="text-center text-gray-500">No inventory items available.</p>
          ) : (
            <ul className="list-disc pl-5 space-y-4">
              {inventory.map((item) => (
                <li key={item.id} className="flex justify-between items-center p-4 border border-gray-300 bg-gray-100 rounded shadow-sm">
                  <span className="text-black">
                    {item.name} - {item.quantity}
                  </span>
                  <div>
                    <button
                      onClick={() => handleDeleteInventory(item.id)}
                      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300 mr-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleRequestInventory(item.name)}
                      className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200 transition duration-300"
                    >
                      Request
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {message && <p className="text-center text-green-500 mt-4">{message}</p>}
    </div>
  );
};

export default NgoInventory;
