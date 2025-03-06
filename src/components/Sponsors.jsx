import React from "react";
import Sponsorscards from "./ui-components/Sponsorscards";

const Sponsors = () => {
  return (
    <div className="flex w-full  overflow-hidden px-6 py-4 flex-col items-center">
      <div className="text-white text-4xl tracking-tight lg:mt-16 lg:text-5xl ">
        Sponsors
      </div>
      <div className="m-40">
        <Sponsorscards />
      </div>
    </div>
  );
};

export default Sponsors;
