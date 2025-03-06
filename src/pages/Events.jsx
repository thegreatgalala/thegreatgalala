import React from "react";
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Intraclgevents from "../components/Intraclgevents";
import Fireworks from "../components/ui/fireworks";
import Background from "../components/Background";
import Eventdetailscard from "../components/Eventdetailcards";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <div className="w-screen h-auto bg-[#2D1D4C] bg-cover relative">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <Fireworks />
      <StarsBackground />
      <ShootingStars />
      <Navbar />
      <Intraclgevents />
      <div className="w-full bg-black relative z-10">
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Events;
