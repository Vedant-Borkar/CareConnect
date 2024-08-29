import React from 'react';

const EventCard = ({ title, description, tags }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:border-2 hover:border-grey hover:shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-center mb-4">{description}</p>
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default EventCard;
