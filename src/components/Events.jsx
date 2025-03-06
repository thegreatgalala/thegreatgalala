import React from "react";
import Eventcategory from "../components/ui-components/Eventcategory";
import intracollege from "../assets/intracollege.png";
import intercollege from "../assets/intercollege.png";
import { BackgroundGradient } from "./ui/background-gradient";

const Events = () => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden px-8 py-4 flex-col items-center mb-5">
      <div className="w-full flex flex-col items-center">
        <div className="text-white pb-16 text-4xl tracking-tight lg:mt-20 lg:text-6xl w-full flex items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-2 bg-gray-300 rounded-full hidden sm:block"></div>
            <span className="mx-4">Events</span>
            <div className="flex-1 h-2 bg-gray-300 rounded-full hidden sm:block"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-40 md:gap-80 pt-10 justify-center">
        <BackgroundGradient>
          <Eventcategory imageUrl={intracollege} eventName="Inter College" />
        </BackgroundGradient>
        <BackgroundGradient>
          <Eventcategory imageUrl={intercollege} eventName="Inter College" />
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Events;
