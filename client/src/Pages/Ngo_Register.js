import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./NGOBaseAuth";

const NgoRegister = () => {
  const [formData, setFormData] = useState({
    ngoName: "",
    ngoId: "",
    ngoLicense: "",
    email: "",
    contactNo: "",
    address: "",
    password: "",
  });

  const { ngoName, ngoId, ngoLicense, email, contactNo, address, password } =
    formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Add additional NGO data to Firestore
      await addDoc(collection(db, "ngos"), {
        ngoName,
        ngoId,
        ngoLicense,
        email,
        contactNo,
        address,
        userId: user.uid,
      });

      console.log("NGO registered successfully!");
      // Redirect or display success message
    } catch (error) {
      console.error("Error registering NGO:", error.message);
      // Handle errors here, e.g., display error messages
    }
  };

  return (
    <div>
      <h2>NGO Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ngoName">NGO Name:</label>
          <input
            type="text"
            name="ngoName"
            value={ngoName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ngoId">NGO ID:</label>
          <input
            type="text"
            name="ngoId"
            value={ngoId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ngoLicense">NGO License:</label>
          <input
            type="text"
            name="ngoLicense"
            value={ngoLicense}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNo">Contact No.:</label>
          <input
            type="text"
            name="contactNo"
            value={contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            value={address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default NgoRegister ;
