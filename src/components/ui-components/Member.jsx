import React from "react";

const Member = ({ image, name, role, instagram }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={`${name}'s Avatar`}
        className="w-24 h-24 sm:w-44 sm:h-44 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 z-40 border-4 rounded-full transition-all duration-300 shadow-[0_0_20px_#BD81A4] border-[#db459d] hover:shadow-[0_0_30px_#BD81A4] hover:border-[#ff85cc]"
      />

      <div className="mt-5">
        <p
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2"
          style={{
            fontFamily: "LexendDecaRegular, sans-serif",
            color: "white",
          }}
        >
          {name}
        </p>

        {/* Make the Role Clickable */}
        <p className="text-sm sm:text-base md:text-lg font-base text-gray-400 z-30">
          <a
            href={instagram} // Clickable link
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 text-gray-400 hover:text-gray-300 transition duration-300"
          >
            {role}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Member;
