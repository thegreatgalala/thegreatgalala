import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import perilogo from "../assets/perilogo.svg";
import greatgalalalogo from "../assets/gglogotemp.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-2 flex justify-between items-center w-full">
      <div>
        <Link
          to="/"
          onClick={() => handleNavClick("hero")}
          state={{ scrollTo: "hero" }}
        >
          <img className="w-32" src={perilogo} alt="clglogo" />
        </Link>
      </div>
      <div
        className={`nav-links md:static absolute rounded-2xl p-4 md:min-h-fit min-h-[40vh] ${
          menuOpen ? "top-[100%]" : "top-[-1000%]"
        } md:w-auto w-full flex flex-col justify-center items-center px-8 backdrop-blur-md bg-white/10 border border-white/10 shadow-lg transition-all duration-300 ease-in-out z-[101] -left-0`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
          <li>
            <Link
              to="/"
              onClick={() => handleNavClick("about")}
              state={{ scrollTo: "about" }}
            >
              <button>
                <span className="text-xs cursor-pointer text-white">About</span>
              </button>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => handleNavClick("events")}
              state={{ scrollTo: "events" }}
            >
              <button>
                <span className="text-xs cursor-pointer text-white">Event</span>
              </button>
            </Link>
          </li>
          <li>
            <button onClick={() => handleNavClick("footer")}>
              <span className="text-xs cursor-pointer text-white">Contact</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <img className="w-32" src={greatgalalalogo} alt="culturallogo" />
        <button
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer md:hidden"
        >
          {menuOpen ? (
            <IoClose className="text-white" />
          ) : (
            <IoMenu className="text-white" />
          )}{" "}
          {/* Toggle between icons */}
        </button>
      </div>
    </nav>
  );
};
const StyledWrapper = styled.div`
  button,
  button::after {
    padding: 16px 20px;
    font-size: 18px;
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    line-height: 1;
    box-shadow: 6px 0px 0px #00e6f6;
    outline: transparent;
    position: relative;
  }

  button::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "HOVER ME";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ff013c 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  button:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;

export default Navbar;
