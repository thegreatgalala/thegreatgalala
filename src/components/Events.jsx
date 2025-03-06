import React from "react";
import Eventscard from "./ui-components/Clgeventscard";
import intracollege from "../assets/intracollege.png";
import intercollege from "../assets/intercollege.png";

const Events = () => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden px-8 py-4 flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="text-white  text-3xl tracking-tight lg:mt-16 pb-20 lg:text-4xl w-full text-center">
          Events
        </div>
      </div>
      <div className="flex flex-wrap gap-40 md:gap-80 justify-center">
        <Eventscard imageUrl={intracollege} eventName="Inter College" />

        <Eventscard imageUrl={intercollege} eventName="Intra College" />
      </div>
    </div>
  );
};

export default Events;
