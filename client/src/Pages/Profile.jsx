import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-black h-32"></div>
        <div className="relative -mt-16">
          <img
            className="w-32 h-32 rounded-full mx-auto border-4 border-white"
            src="https://via.placeholder.com/150"
            alt="Jenna Stones"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="text-2xl font-semibold text-gray-800">Jenna Stones</h2>
          <p className="text-gray-500">jena@mail.com</p>
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-600">
            <span className="inline-block mr-2">&#128205;</span>
            Los Angeles, California
          </p>
          <p className="text-gray-600">
            <span className="inline-block mr-2">&#128188;</span>
            Solution Manager - Creative Tim Officer
          </p>
          <p className="text-gray-600">
            <span className="inline-block mr-2">&#127891;</span>
            University of Computer Science
          </p>
        </div>
        <div className="px-6 mt-4">
          <p className="text-gray-700 text-sm text-justify">
            An artist of considerable range, Jenna the name taken by Melbourne-raised,
            Brooklyn-based Nick Murphy writes, performs, and records all of his own
            music, giving it a warm, intimate feel with a solid groove structure. An
            artist of considerable range.
          </p>
        </div>
        <div className="flex justify-around mt-6 mb-6 text-center">
          <div>
            <p className="text-xl font-bold text-gray-700">22</p>
            <p className="text-gray-500">Friends</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-700">10</p>
            <p className="text-gray-500">Photos</p>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-700">89</p>
            <p className="text-gray-500">Comments</p>
          </div>
        </div>
        <div className="text-center mb-4">
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
