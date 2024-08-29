import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "./FireBaseAuth"; // Importing auth and db from FireBaseAuth
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch additional user data from Firestore
      const q = query(collection(db, "users"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        let userData = {};
        querySnapshot.forEach((doc) => {
          userData = { ...doc.data(), id: doc.id }; // Add ID for potential updates
        });
        console.log("User logged in successfully!", userData);

        // Store user data in session storage
        sessionStorage.setItem("userData", JSON.stringify(userData));

        // Set sign-in status in localStorage
        localStorage.setItem("isSignedIn", "true");

        // Redirect to user dashboard
        navigate("/userdashboard");
        window.location.reload(); // Reload to update the NavBar
      } else {
        console.log("User document not found in Firestore");
        setError("User not found. Please check your credentials.");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="bg-white-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mr-2 py-2 px-5 rounded-full font-semibold transition-all duration-300 transform bg-black text-white shadow-lg scale-105"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
