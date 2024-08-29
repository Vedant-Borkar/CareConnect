import React, { useState } from "react";
import NgoRegister from "./Ngo_Register"; // Import the NGO registration component
import UserRegister from "./User_Register"; // Import the User registration component

const SignUp = () => {
  // State to manage form selection
  const [isNgo, setIsNgo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
        {/* Toggle between User and NGO registration forms */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsNgo(false)}
            className={`mr-2 py-2 px-4 rounded ${
              !isNgo ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            User Register
          </button>
          <button
            onClick={() => setIsNgo(true)}
            className={`ml-2 py-2 px-4 rounded ${
              isNgo ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            NGO Register
          </button>
        </div>
        {/* Conditionally render the forms based on state */}
        {isNgo ? <NgoRegister /> : <UserRegister />}
      </div>
    </div>
  );
};

export default SignUp;
