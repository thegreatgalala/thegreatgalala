import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  technicalEvents,
  onStageEvents,
  offStageEvents,
} from "../constants/intraEventDetails";
import ClgEventscard from "./ui-components/Clgeventscard";

export const Intraclgevents = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-50 overflow-hidden">
      <CustomTabs />
    </div>
  );
};

const CustomTabs = () => {
  const { events } = useParams();
  const isIntracollege = events?.toLowerCase() === "intracollege";

  const [activeTab, setActiveTab] = useState(
    isIntracollege ? "onstage" : "technical"
  );

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        placeholder="Search event..."
        value={search}
        onChange={handleSearchChange}
        className="w-full max-w-[400px] p-[10px] text-[20px] mb-[20px] 
             text-[#c6e2ff] border-2 border-[#ff007f] 
             rounded-lg outline-none bg-transparent z-50"
        style={{
          fontFamily: "LexendDecaRegular, sans-serif",
          color: "white",
        }}
      />

      {/* Neon Styled Tab Selector */}
      <div className="relative flex justify-center items-center bg-[#0d0d0d] p-2 rounded-full border-2 border-transparent bg-clip-padding animate-glow">
        <div className="relative flex w-[400px] h-[40px] lg:w-[800px] rounded-full bg-[#0d0d0d] border-2 border-[#ff00ff] shadow-[0_0_10px_#ff00ff] transition-all">
          <button
            style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            className={`${
              isIntracollege ? "w-1/2" : "w-1/3"
            } text-white uppercase font-bold py-2 rounded-full transition-all ${
              activeTab === "onstage" ? "bg-[#ff00ff]" : "hover:bg-[#ff00ff5d]"
            }`}
            onClick={() => setActiveTab("onstage")}
          >
            On-Stage
          </button>
          <button
            style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            className={`${
              isIntracollege ? "w-1/2" : "w-1/3"
            } text-white uppercase font-bold py-2 rounded-full transition-all ${
              activeTab === "offstage" ? "bg-[#ff00ff]" : "hover:bg-[#ff00ff5d]"
            }`}
            onClick={() => setActiveTab("offstage")}
          >
            Off-Stage
          </button>
          {!isIntracollege && (
            <button
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
              className={`w-1/3 text-white uppercase font-bold py-2 rounded-full transition-all ${
                activeTab === "technical"
                  ? "bg-[#ff00ff]"
                  : "hover:bg-[#ff00ff5d]"
              }`}
              onClick={() => setActiveTab("technical")}
            >
              Technical
            </button>
          )}
        </div>
      </div>

      {/* Event List */}
      <div className="mt-10 w-full flex flex-col items-center">
        <EventList activeTab={activeTab} search={search} />
      </div>
    </div>
  );
};

const EventList = ({ activeTab, search }) => {
  let events = [];

  if (activeTab === "technical") {
    events = technicalEvents;
  } else if (activeTab === "onstage") {
    events = onStageEvents;
  } else if (activeTab === "offstage") {
    events = offStageEvents;
  }

  // Apply search filter
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 w-full max-w-6xl 
           grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
           items-start justify-items-center md:gap-10 lg:gap-12"
    >
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <BackgroundGradient>
            <ClgEventscard
              key={event.title}
              imageUrl={event.image}
              eventName={event.title}
            />
          </BackgroundGradient>
        ))
      ) : (
        <p className="text-gray-500 text-lg">No events found.</p>
      )}
    </motion.div>
  );
};

export default Intraclgevents;
