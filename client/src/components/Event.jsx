import React, { useState } from 'react';
import './events.css';

const Event = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('physical');
  const [virtualLink, setVirtualLink] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <div className="progress-tracker">
        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>1. Event Details</div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>2. Date & Venue</div>
        <div className={`step ${currentStep === 3 ? 'active' : ''}`}>3. Contact Details</div>
      </div>

      <div className="form-content">
        {currentStep === 1 && (
          <div className="form-section transition-in">
            <h2>Tell us about your event</h2>
            <div>
              <label>Event Name</label>
              <input 
                type="text" 
                value={eventName} 
                onChange={(e) => setEventName(e.target.value)} 
                placeholder="Enter the name of the event"
              />
            </div>
            <div>
              <label>Event Type</label>
              <input 
                type="text" 
                value={eventType} 
                onChange={(e) => setEventType(e.target.value)} 
                placeholder="Enter the type of event (e.g., Workshop, Seminar)"
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                    style={{
                    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
                }}
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Enter the description of the event"
                />

            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-section transition-in">
            <h2>When and where will it take place?</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div>
                <label>Date</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                />
              </div>
              <div>
                <label>From</label>
                <input 
                  type="time" 
                  value={startTime} 
                  onChange={(e) => setStartTime(e.target.value)} 
                />
              </div>
              <div>
                <label>To</label>
                <input 
                  type="time" 
                  value={endTime} 
                  onChange={(e) => setEndTime(e.target.value)} 
                />
              </div>
            </div>
            <div>
              <label>Location</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="physical">Physical</option>
                <option value="virtual">Virtual</option>
              </select>
              {location === 'virtual' && (
                <div>
                  <label>Virtual Link</label>
                  <input 
                    type="url" 
                    placeholder="Enter the virtual meeting link" 
                    value={virtualLink} 
                    onChange={(e) => setVirtualLink(e.target.value)} 
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
                value={contactName} 
                onChange={(e) => setContactName(e.target.value)} 
                placeholder="Enter the contact person's name"
              />
            </div>
            <div>
              <label>Contact Email</label>
              <input 
                type="email" 
                value={contactEmail} 
                onChange={(e) => setContactEmail(e.target.value)} 
                placeholder="Enter the contact email address"
              />
            </div>
            <div>
              <label>Contact Phone</label>
              <input 
                type="tel" 
                value={contactPhone} 
                onChange={(e) => setContactPhone(e.target.value)} 
                placeholder="Enter the contact phone number"
              />
            </div>
          </div>
        )}
      </div>

      <div className="form-buttons">
        {currentStep > 1 && <button type="button" onClick={prevStep}>Back</button>}
        {currentStep < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {currentStep === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Event;