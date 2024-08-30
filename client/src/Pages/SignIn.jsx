import React, { useState } from "react";
import UserLogin from "./User_Login";
import NgoLogin from "./Ngo_Login";

const LoginSwitcher = () => {
  const [isNgoLogin, setIsNgoLogin] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1049557/pexels-photo-1049557.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-2">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsNgoLogin(false)}
            className={`mr-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 transform ${
              !isNgoLogin
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-gray-300 text-gray-800 hover:scale-105 hover:bg-gray-400"
            }`}
          >
            User Login
          </button>
          <button
            onClick={() => setIsNgoLogin(true)}
            className={`ml-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 transform ${
              isNgoLogin
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-gray-300 text-gray-800 hover:scale-105 hover:bg-gray-400"
            }`}
          >
            NGO Login
          </button>
        </div>
        <div className="mt-4">
          {isNgoLogin ? <NgoLogin /> : <UserLogin />}
        </div>
      </div>
    </div>
  );
};

export default LoginSwitcher;
