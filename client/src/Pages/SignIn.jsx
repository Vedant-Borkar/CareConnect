import React, { useState } from "react";
import UserLogin from "./User_Login";
import NgoLogin from "./Ngo_Login";

const LoginSwitcher = () => {
  const [isNgoLogin, setIsNgoLogin] = useState(false); // State to toggle between User and NGO login

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsNgoLogin(false)}
            className={`mr-4 py-2 px-4 ${
              !isNgoLogin
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded focus:outline-none`}
          >
            User Login
          </button>
          <button
            onClick={() => setIsNgoLogin(true)}
            className={`py-2 px-4 ${
              isNgoLogin
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } rounded focus:outline-none`}
          >
            NGO Login
          </button>
        </div>
        {isNgoLogin ? <NgoLogin /> : <UserLogin />}
      </div>
    </div>
  );
};

export default LoginSwitcher;
