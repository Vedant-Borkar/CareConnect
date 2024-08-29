import React from "react";
import EventCard from "../components/EventCard";

const EventsDisplay = () => {
  const events = [
    {
      title: "Event 1",
      description:
        "Description of Event 1 goes here. Provide details about the event, date, time, and location.",
      tags: ["Blood Sucker"],
    },
    {
      title: "Event 2",
      description:
        "Description of Event 2 goes here. Provide details about the event, date, time, and location.",
      tags: ["Donation"],
    },
    {
      title: "Event 3",
      description:
        "Description of Event 3 goes here. Provide details about the event, date, time, and location.",
      tags: ["Fundraiser"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 bg-gray-100">
      <div className="text-black text-center mb-12 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Discover our exciting upcoming events that you don't want to miss.
          Join us for engaging activities and memorable experiences.
        </p>
      </div>
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            tags={event.tags}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-black text-white font-semibold rounded hover:scale-105 hover:border-2 hover:border-black hover:shadow-lg">
          View More
        </button>
      </div>
    </div>
  );
};

export default EventsDisplay;
