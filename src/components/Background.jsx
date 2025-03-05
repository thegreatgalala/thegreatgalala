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
  });

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div>
        <img src="/pinktopleft.svg" alt="pink" className="back" />
      </div>
      <div>
        <img src="/bluebottomright.svg" alt="blue" className="back2" />
      </div>
      <div>
        <img src="/bottomcenter.svg" alt="blue" className="back3" />
      </div>
    </motion.section>
  );
};

export default Background;
