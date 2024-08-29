import React from "react";

function Home() {
  return (
    <div className="bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center min-h-screen bg-black text-white px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./img3.jpg')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Unified Platform for Old Age Homes and Orphans
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Connecting and supporting old age homes and orphanages through a
            seamless and compassionate platform. Our mission is to provide a
            unified space where both communities can find resources, support,
            and opportunities to improve their lives.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="feature"
        className="flex items-center justify-center min-h-screen bg-white text-black px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3-3v-4a3 3 0 00-3-3H7a3 3 0 00-3 3v2H2a3 3 0 00-3 3v4a3 3 0 003 3h5v2h10v-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Awarded Agency
            </h3>
            <p className="text-center">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7h18M3 12h18m-6 5h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Free Revisions
            </h3>
            <p className="text-center">
              Keep your user engaged by providing meaningful information.
              Remember that by this time, the user is curious.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m4 4h-1v-4h-1m4 4h-1v-4h-1m-4 4h-1v-4h-1M6 9h.01M6 16h.01M6 21h.01M6 13h.01M6 5h.01M13 21h-1v-4h-1M20 5h-1V1h-1M6 5H1V1h1m11 4h-1V1h-1M9 16h1v1H8V6h1v8m-5 0h1v1H3V1h1v13m5 9h1v1H8v-1m4-9h1v1h-1v-1m-4 4h1v1H8v-1m4 4h1v1h-1v-1m-8 0h1v1H3v-1M6 8h-.01M6 3H1v4h5V3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Verified Company
            </h3>
            <p className="text-center">
              Write a few lines about each one. A paragraph describing a feature
              will be enough. Keep your user engaged!
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        id="event-section"
        className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4"
      >
        <div className="text-center mb-12 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our exciting upcoming events that you don't want to miss.
            Join us for engaging activities and memorable experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Event 1</h3>
            <p>
              Description of Event 1 goes here. Provide details about the event,
              date, time, and location.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Event 2</h3>
            <p>
              Description of Event 2 goes here. Provide details about the event,
              date, time, and location.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Event 3</h3>
            <p>
              Description of Event 3 goes here. Provide details about the event,
              date, time, and location.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonial"
        className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4"
      >
        <div className="flex flex-col justify-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Read testimonials from our satisfied clients who have experienced
            the benefits of our services.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 max-w-6xl">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md">
            <p className="mb-4">
              "Amazing service! The team was highly professional and delivered
              beyond expectations."
            </p>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-600">CEO, Example Company</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md">
            <p className="mb-4">
              "Highly recommended! The results were outstanding and the support
              was exceptional."
            </p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-600">Marketing Director, Another Company</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
