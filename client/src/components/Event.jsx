import React, { useState } from "react";
import "./events.css";

const Event = ({ onEventSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [eventData, setEventData] = useState({
    title: "",
    eventType: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "physical",
    virtualLink: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEventSubmit(eventData);
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <div className="progress-tracker">
        <div className={`step ${currentStep === 1 ? "active" : ""}`}>
          1. Event Details
        </div>
        <div className={`step ${currentStep === 2 ? "active" : ""}`}>
          2. Date & Venue
        </div>
        <div className={`step ${currentStep === 3 ? "active" : ""}`}>
          3. Contact Details
        </div>
      </div>

      <div className="form-content">
        {currentStep === 1 && (
          <div className="form-section transition-in">
            <h2>Tell us about your event</h2>
            <div>
              <label>Event Name</label>
              <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                placeholder="Enter the name of the event"
              />
            </div>
            <div>
              <label>Event Type</label>
              <input
                type="text"
                name="eventType"
                value={eventData.eventType}
                onChange={handleChange}
                placeholder="Enter the type of event (e.g., Workshop, Seminar)"
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                style={{
                  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
                }}
                value={eventData.description}
                onChange={handleChange}
                placeholder="Enter the description of the event"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-section transition-in">
            <h2>When and where will it take place?</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>From</label>
                <input
                  type="time"
                  name="startTime"
                  value={eventData.startTime}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>To</label>
                <input
                  type="time"
                  name="endTime"
                  value={eventData.endTime}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label>Location</label>
              <select
                name="location"
                value={eventData.location}
                onChange={handleChange}
              >
                <option value="physical">Physical</option>
                <option value="virtual">Virtual</option>
              </select>
              {eventData.location === "virtual" && (
                <div>
                  <label>Virtual Link</label>
                  <input
                    type="url"
                    name="virtualLink"
                    placeholder="Enter the virtual meeting link"
                    value={eventData.virtualLink}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-section transition-in">
            <h2>Contact Details</h2>
            <div>
              <label>Contact Name</label>
              <input
                type="text"
                name="contactName"
                value={eventData.contactName}
                onChange={handleChange}
                placeholder="Enter the contact person's name"
              />
            </div>
            <div>
              <label>Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                value={eventData.contactEmail}
                onChange={handleChange}
                placeholder="Enter the contact email address"
              />
            </div>
            <div>
              <label>Contact Phone</label>
              <input
                type="tel"
                name="contactPhone"
                value={eventData.contactPhone}
                onChange={handleChange}
                placeholder="Enter the contact phone number"
              />
            </div>
          </div>
        )}
      </div>

      <div className="form-buttons">
        {currentStep > 1 && (
          <button type="button" onClick={prevStep}>
            Back
          </button>
        )}
        {currentStep < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {currentStep === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Event;
