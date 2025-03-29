import React from "react";
import tgglogo1 from "../assets/tgglogo1.png";
import Carousel from "./ui-components/Carousel";
import { BackgroundGradient } from "./ui/background-gradient";

const About = () => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden px-6 py-4 flex-col items-center ">
      <div className="w-full flex flex-col items-center">
        <div className="text-[#4AC3EB] pb-16 text-4xl tracking-tight lg:mt-20 lg:text-6xl w-full">
          <div
            className="my-8 flex items-center gap-4 after:h-2 after:bg-gray-300 after:rounded-full after:content-[''] 
                      after:flex-1 after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/4 xl:after:w-1/6 
                      after:hidden sm:after:block text-center"
          >
            Previously on
          </div>
        </div>
        <div className="flex justify-center w-full">
          <img
            className="w-96 sm:w-96 md:w-[25rem] lg:w-[30rem] xl:w-[50rem]  mb-0"
            src={tgglogo1}
            alt="tgglogo1"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full px-6 lg:px-16 py-11 gap-10 mb-16">
          <div className="lg:w-1/2 w-full">
            <BackgroundGradient>
              <Carousel />
            </BackgroundGradient>
          </div>
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <p
              className="mt-4 text-gray-300 text-xl sm:text-xl md:text-2xl lg:text-3xl text-justify"
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            >
              The Great Galala event is a vibrant celebration of heritage and
              community, where tradition and artistry come to life. The festival
              features a series of traditional performances, including dance
              routines and musical ensembles that showcase the community's
              age-old customs. Colorful costumes, ornate decorations, and lively
              street parades set the stage for an immersive experience. Artisans
              and craftsmen display their intricate works, reflecting the deep
              artistic traditions of the region. Throughout the event,
              ceremonial rituals honor ancestral roots and nature, reinforcing
              the community’s strong bond with its cultural identity. Overall,
              the festival is a joyous, inclusive gathering that highlights the
              timeless traditions, communal spirit, and artistic legacy of the
              culture it represents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
