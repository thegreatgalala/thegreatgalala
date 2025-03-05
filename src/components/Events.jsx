import React from "react";
import Eventscard from "./ui-components/Clgeventscard";
import intracollege from "../assets/intracollege.png";
import intercollege from "../assets/intercollege.png";

const Events = () => {
  return (
    <div className="flex w-full bg-purple-900 min-h-screen overflow-hidden px-6 py-4 flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="text-white pb-16 text-4xl tracking-tight lg:mt-16 lg:text-5xl w-full">
          Galala Events
        </div>
      </div>
      <div className="flex flex-wrap gap-20 md:gap-40 justify-center">
        <Eventscard imageUrl={intracollege} eventName="Inter College" />

        <Eventscard imageUrl={intercollege} eventName="Intra College" />
      </div>
    </div>
  );
};

export default Events;
