import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "./FireBaseAuth";
import { useNavigate } from "react-router-dom";

const NgoLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = () => {
    localStorage.setItem("isSignedIn", "true");
    navigate("/ngodashboard");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const ngoQuery = query(collection(db, "ngos"), where("userId", "==", user.uid));
      const ngoSnapshot = await getDocs(ngoQuery);

      if (!ngoSnapshot.empty) {
        let ngoData = {};
        ngoSnapshot.forEach((doc) => {
          ngoData = { ...doc.data(), id: doc.id };
        });

        sessionStorage.setItem("ngoData", JSON.stringify(ngoData));
        handleSignIn();
      } else {
        setError("No NGO found with this email!");
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="bg-white flex items-center justify-center  p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">NGO Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
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
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-5 rounded-full font-semibold bg-black text-white shadow-lg transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NgoLogin;
