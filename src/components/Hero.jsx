import React, { useEffect } from "react";
import tgglogo from "../assets/tgglogo.svg";
import Countdown from "./ui-components/Countdown";
import PeriNeonize from "../assets/PeriNeonize.svg";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-48 space-y-10 overflow-hidden ">
      <span className="mb-1.5 inline-block px-3 py-1.5 text-sm">
        <img
          src={PeriNeonize}
          alt="theme logo"
          className="w-56 sm:w-48 md:w-52 lg:w-56 xl:w-64"
        />
      </span>
      <img
        className="w-96 sm:w-96 md:w-[25rem] lg:w-[30rem] xl:w-[50rem]  mb-0 "
        src={tgglogo}
        alt="cultural-logo"
      />

      <motion.button
        onClick={scrollToEvents}
        style={{
          border,
          boxShadow,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="group relative flex w-fit items-center gap-0.5 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50 tracking-wide"
      >
        Register Now
        <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
      </motion.button>

      <div className="w-full flex justify-center ">
        <Countdown />
      </div>
    </div>
  );
};

export default Hero;
