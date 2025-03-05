import { useState } from "react";

const SpaceButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      className={`relative flex items-center justify-center w-52 h-12 rounded-full overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out border-double border-4 
        ${
          isActive
            ? "border-pink-500"
            : "border-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-clip-padding"
        }
        hover:scale-110`}
    >
      <strong className="z-10 text-white tracking-widest text-xs drop-shadow-md">
        SPACE
      </strong>
      <div className="absolute inset-0 w-full h-full rounded-full backdrop-blur-lg"></div>
      <div className="absolute inset-0 flex w-48">
        <div
          className={`w-full h-8 blur-3xl transition-colors duration-300 
            ${isActive ? "bg-pink-500" : "bg-pink-400 opacity-70"}`}
        ></div>
        <div
          className={`w-full h-8 blur-3xl transition-colors duration-300 
            ${isActive ? "bg-pink-500" : "bg-purple-500 opacity-70"}`}
        ></div>
      </div>
      <div className="absolute inset-0 w-full h-full animate-spin-slow opacity-50">
        <div
          className="absolute w-[200rem] h-[200rem] bg-transparent"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </button>
  );
};

export default SpaceButton;
