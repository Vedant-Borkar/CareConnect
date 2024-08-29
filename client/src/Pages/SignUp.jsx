import React, { useState } from "react";
import NgoRegister from "./Ngo_Register";
import UserRegister from "./User_Register";

const SignUp = () => {
  const [isNgo, setIsNgo] = useState(false);

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-600 flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1049557/pexels-photo-1049557.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign Up
        </h2>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsNgo(false)}
            className={`mr-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 transform ${
              !isNgo
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-gray-300 text-gray-800 hover:scale-105 hover:bg-gray-400"
            }`}
          >
            User Register
          </button>
          <button
            onClick={() => setIsNgo(true)}
            className={`ml-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 transform ${
              isNgo
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-gray-300 text-gray-800 hover:scale-105 hover:bg-gray-400"
            }`}
          >
            NGO Register
          </button>
        </div>
        <div className="mt-4">
          {isNgo ? <NgoRegister /> : <UserRegister />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
