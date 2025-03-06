import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { viewEventDetails } from "../../constants/vieweventdetails";

const Eventdetail = () => {
  const { eventName } = useParams();
  const location = useLocation();
  const event = viewEventDetails[eventName];

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Event not found!
      </div>
    );
  }

  // Determine which date to display
  const eventDate = location.pathname.includes("intercollege")
    ? event.eventDetails.date1
    : event.eventDetails.date2;

  return (
    <div className="flex w-full min-h-screen overflow-hidden px-5 py-4 flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="text-white pb-16 text-4xl tracking-tight mt-22 sm:mt-22 md:mt-24 lg:mt-28 xl:mt-30 lg:text-5xl w-full">
          <div
            className="my-8 flex items-center gap-4 after:h-2 after:bg-gray-300 after:rounded-full after:content-[''] 
                      after:flex-1 after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/4 xl:after:w-1/6 
                      after:hidden sm:after:block text-center"
          >
            {event.title}
          </div>
        </div>
      </div>

      <div className="w-full max-w-10/12 flex flex-col lg:flex-row lg:items-start gap-10 text-center lg:text-left">
        {/* Left Side: Card with Description & Brief */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          {/* Card */}
          <div
            className="relative w-full max-w-[1280px] h-[250px] lg:h-[350px] bg-gradient-to-br 
          from-pink-500 to-cyan-400 flex justify-center items-center shadow-xl 
          transition-transform shadow-pink-500/80 p-1"
          >
            {/* Image inside the Card */}
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={event.poster}
                alt={event.title}
                className="w-[99.5%] h-[99.5%] object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <p
            className="text-white text-base sm:text-lg font-semibold leading-relaxed mt-6"
            style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
          >
            {event.description}
          </p>

          {/* Brief */}
          <p
            className="text-white text-sm sm:text-base leading-relaxed mt-3"
            style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
          >
            {event.brief}
          </p>
        </div>

        {/* Right Side: Rules, Points, Event Details, Register Button */}
        <div className="lg:w-1/2 flex flex-col gap-6 pb-8 items-center lg:items-start ">
          {/* Rules Section */}
          <div className="w-full text-left">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-2">
              Rules
            </h4>
            <ul
              className="text-white text-sm sm:text-base leading-relaxed list-disc list-inside"
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            >
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Event Details Section */}
          <div className="w-full text-left">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-2">
              Event Details
            </h4>
            <p
              className="text-white text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            >
              <strong>Date:</strong> {eventDate}
            </p>
            <p
              className="text-white text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            >
              <strong>Time:</strong> {event.eventDetails.time}
            </p>
            <p
              className="text-white text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            >
              <strong>Fees:</strong> {event.eventDetails.fees}
            </p>
          </div>

          {/* Register Button */}
          <button
            className="bg-pink-500 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg 
            shadow-lg transition-transform hover:scale-105 hover:shadow-pink-500/80"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eventdetail;
