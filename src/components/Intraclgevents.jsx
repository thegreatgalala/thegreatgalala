import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  technicalEvents,
  nonTechnicalEvents,
} from "../constants/intraEventDetails";
import Eventdetailscard from "./Eventdetailcards";

export const Intraclgevents = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-50 overflow-hidden bg-purple-900">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [activeTab, setActiveTab] = useState("nontechnical");
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <div className="w-full flex flex-col items-center">
      <ul
        onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
        className="relative flex w-fit rounded-full border-2 border-[#ff00ff] bg-[#1a1a1a] p-1 shadow-lg"
      >
        <Tab
          setPosition={setPosition}
          onClick={() => setActiveTab("technical")}
        >
          Technical Events
        </Tab>
        <Tab
          setPosition={setPosition}
          onClick={() => setActiveTab("nontechnical")}
        >
          Non-Technical Events
        </Tab>
        <Cursor position={position} />
      </ul>

      <div className="mt-10 w-full flex flex-col items-center">
        <EventList activeTab={activeTab} />
      </div>
    </div>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 block cursor-pointer px-6 py-3 text-sm uppercase text-[#ff00ff] hover:text-[#00ffff] transition-all"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-10 rounded-full bg-[#ff00ff] opacity-80"
    />
  );
};

/* Dynamically Render Events */
const EventList = ({ activeTab }) => {
  const events =
    activeTab === "technical" ? technicalEvents : nonTechnicalEvents;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      {events.map((event) => (
        <Eventdetailscard
          content={event.content}
          image={event.image}
          title={event.title}
          date={event.date}
          price={event.price}
          time={event.timing}
        />
      ))}
    </motion.div>
  );
};

export default Intraclgevents;
