import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Background from "../components/Background";
import Fireworks from "../components/ui/fireworks";
import Sponsors from "../components/Sponsors";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return (
    <div className="w-screen h-auto bg-[#2D1D4C] bg-cover relative">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <Fireworks />
      <ShootingStars />
      <StarsBackground />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Sponsors />
      <section id="events">
        <Events />
      </section>
      <div className="w-full bg-black relative z-10">
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
