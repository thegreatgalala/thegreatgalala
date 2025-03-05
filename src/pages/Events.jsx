import React from "react";
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Footer from "../components/Footer";
import Collegecard from "./Collegecard.jsx";

const Events = () => {
  return (
    <div className="w-screen h-auto bg-purple-900 bg-cover relative">
      <StarsBackground />
      <ShootingStars />
      <Navbar />
      <Collegecard />
      <div className="w-full bg-black relative z-10">
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Events;
