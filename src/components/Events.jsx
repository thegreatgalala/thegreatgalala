import React from "react";
import Eventcategory from "../components/ui-components/Eventcategory";
import intracollege from "../assets/intracollege.png";
import intercollege from "../assets/intercollege.png";

const Events = () => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden px-8 py-4 flex-col items-center mb-10">
      <div className="w-full flex flex-col items-center">
        <div className="text-white  text-3xl tracking-tight lg:mt-16 pb-5 lg:text-4xl w-full text-center">
          Events
        </div>
      </div>
      <div className="flex flex-wrap gap-40 md:gap-80 justify-center">
        <Eventcategory imageUrl={intracollege} eventName="Inter College" />

        <Eventcategory imageUrl={intercollege} eventName="Intra College" />
      </div>
    </div>
  );
};

export default Events;
