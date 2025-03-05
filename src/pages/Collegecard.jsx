import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eventData from "./eventsDETAIL.js"; 
import "./Collegecard.css";

const Collegecard = () => {
  const [selectedCategory, setSelectedCategory] = useState("technical"); 
  const navigate = useNavigate();

  const handleOptionChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRegister = (eventName) => {
    navigate(`/events/viewevents/${encodeURIComponent(eventName)}`);
  };

  return (
    <div className="intercollege">
      <div id="firstFilter" className="filter-switch">
        <input
          id="option1"
          name="options"
          type="radio"
          checked={selectedCategory === "technical"}
          onChange={() => handleOptionChange("technical")}
        />
        <label className="option" htmlFor="option1">
          Technical
        </label>

        <input
          id="option2"
          name="options"
          type="radio"
          checked={selectedCategory === "nonTechnical"}
          onChange={() => handleOptionChange("nonTechnical")}
        />
        <label className="option" htmlFor="option2">
          Non-Technical
        </label>
        <span className="background"></span>
      </div>

      {/* Event Cards */}
      <div className="event-card-layout">
        {eventData[selectedCategory].map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.poster} alt={event.title} className="event-image" />
            <span>{event.title}</span>
            <button
              className="button"
              onClick={() => handleRegister(event.title)}
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collegecard;
