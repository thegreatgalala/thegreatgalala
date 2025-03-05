import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Eventdetail from "../components/ui-components/Eventdetail";
import Footer from "../components/Footer";

const Eventreg = () => {
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
    <div className="w-screen h-auto bg-purple-900 bg-cover relative">
      <StarsBackground />
      <ShootingStars />
      <Navbar />
      <Eventdetail />
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Eventreg;
