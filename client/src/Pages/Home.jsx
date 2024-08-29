import React, { useEffect } from "react";
import { Element } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clear the state after scrolling
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="bg-black text-white flex flex-col">
      <Element name="home" className="element">
        <section
          id="home"
          className="relative flex items-center justify-center min-h-screen w-full bg-black text-white"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img3.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Unified Platform for Old Age Homes and Orphans
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12">
              Connecting and supporting old age homes and orphanages through a
              seamless and compassionate platform. Our mission is to provide a
              unified space where both communities can find resources, support,
              and opportunities to improve their lives.
            </p>
          </div>
        </section>
      </Element>


      <Element name="feature" className="element">
        <section
          id="feature"
          className="flex items-center justify-center min-h-screen bg-white text-black px-4"
        >
          {/* Features content */}
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
                Collaborated Events
              </h3>
              <p className="text-center">
               
To foster meaningful connections between younger and older generations, promoting mutual respect, understanding, and joy
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
                Want to be a vounteer?
              </h3>
              <p className="text-center">
                Donate or help us in conducting events for these non profit organizations and gain good blessings
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
                You can trust us with your donations since the  NGO's registered with us are 100% verified
              </p>
            </div>
          </div>
        </section>
      </Element>

      <Element name="event-section" className="element">
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
      </Element>

      <Element name="testimonial" className="element">
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
      </Element>
    </div>
  );
}

export default Home;
