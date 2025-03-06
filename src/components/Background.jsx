import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Background = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]); // Fixed missing dependency array

  {
    /*const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
  `;*/
  }
  {
    /*style={{ backgroundImage }}*/
  } //add inside motion,section
  {
    /*<img
        src="/bottomcenter.svg"
        alt="bottom"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 opacity-90"
      />*/
  } // next to img

  return (
    <motion.section className="absolute inset-0 -z-10 w-full min-h-screen">
      {/* Background Images Positioned Correctly */}
      <img
        src="/pinktopleft.svg"
        alt="pink"
        className="absolute top-0 left-0 w-2/3 sm:w-1/3 opacity-90"
      />
      <img
        src="/bluebottomright.svg"
        alt="blue"
        className="absolute top-0 right-0 w-2/3 sm:w-1/3 opacity-90"
      />
    </motion.section>
  );
};

export default Background;
