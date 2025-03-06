import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  technicalEvents,
  onStageEvents,
  offStageEvents,
} from "../constants/intraEventDetails";
import ClgEventscard from "./ui-components/ClgEventscard";

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

  return (
    <div className="w-full flex flex-col items-center">
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
        <EventList activeTab={activeTab} />
      </div>
    </div>
  );
};

const EventList = ({ activeTab }) => {
  let events = [];

  if (activeTab === "technical") {
    events = technicalEvents;
  } else if (activeTab === "onstage") {
    events = onStageEvents;
  } else if (activeTab === "offstage") {
    events = offStageEvents;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-x-16 gap-y-1 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start"
    >
      {events.map((event) => (
        <ClgEventscard
          key={event.title}
          imageUrl={event.image}
          eventName={event.title}
        />
      ))}
    </motion.div>
  );
};

export default Intraclgevents;
