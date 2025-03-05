import React from "react";
import tgglogo1 from "../assets/tgglogo1.png";
import Carousel from "./ui-components/Carousel";
import { BackgroundGradient } from "./ui/background-gradient";

const About = () => {
  return (
    <div className="flex w-full bg-purple-900 min-h-screen overflow-hidden px-6 py-4 flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className="text-white pb-16 text-4xl tracking-tight lg:mt-16 lg:text-5xl w-full">
          <div
            className="my-8 flex items-center gap-4 after:h-2 after:bg-gray-300 after:rounded-full after:content-[''] 
                      after:flex-1 after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/4 xl:after:w-1/6 
                      after:hidden sm:after:block text-center"
          >
            Previously
          </div>
        </div>
        <div className="flex justify-center w-full">
          <img className="" src={tgglogo1} alt="tgglogo1" />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full px-6 lg:px-16 py-11 gap-10">
          <div className="lg:w-1/2 w-full">
            <BackgroundGradient>
              <Carousel />
            </BackgroundGradient>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl">
              Join us for an unforgettable journey filled with excitement,
              learning, and fun. Join us for an unforgettable journey filled
              with excitement, learning, and fun. Join us for an unforgettable
              journey filled with excitement, learning, and fun. Join us for an
              unforgettable journey filled with excitement, learning, and fun.
              Join us for an unforgettable journey filled with excitement,
              learning, and fun. Join us for an unforgettable journey filled
              with excitement, learning, and fun. Join us for an unforgettable
              journey filled with excitement, learning, and fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
