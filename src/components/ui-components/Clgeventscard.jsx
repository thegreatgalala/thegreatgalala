import React from "react";
import { Link, useLocation } from "react-router-dom";

const ClgEventscard = ({ imageUrl, eventName, url }) => {
  const location = useLocation();

  // Extract the base path from the current URL
  const basePath = location.pathname.split("/")[1] || ""; // Gets the first part of the path

  return (
    <Link
      to={`/${basePath}/${url.toLowerCase().replace(/\s+/g, "")}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="relative drop-shadow-xl w-80 sm:w-64 md:w-80 h-80 sm:h-[256px] md:h-[320px] overflow-hidden bg-[#3d3c3d]">
        {/* Image - Fills Almost Entire Card */}
        <img
          src={imageUrl}
          alt="Event"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        />

        {/* Overlay to Darken Image for Better Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-30 z-[2]" />

        {/* Event Name - Centered */}
        <div
          className="absolute inset-0 flex items-center justify-center text-white 
             text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold z-[3]"
          style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
        >
          {eventName}
        </div>

        {/* Neon Glow Effect - Slightly Visible */}
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-500 blur-[50px] -left-1/2 -top-1/2 opacity-40" />
      </div>
    </Link>
  );
};

export default ClgEventscard;
