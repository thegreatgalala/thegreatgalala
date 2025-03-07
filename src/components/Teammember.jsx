import React from "react";
import memberDetails from "../constants/memberDetails";
import Member from "./ui-components/Member";

const Teammember = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 pt-48 space-y-10 overflow-hidden">
      <div className="text-white pb-16 text-4xl tracking-tight lg:mt-20 lg:text-6xl w-full flex items-center justify-center z-10">
        <div className="flex items-center w-full">
          <div className="flex-1 h-2 bg-gray-300 rounded-full hidden sm:block"></div>
          <span className="mx-4">Meet our team</span>
          <div className="flex-1 h-2 bg-gray-300 rounded-full hidden sm:block"></div>
        </div>
      </div>

      {/* First row with 3 members (1-column on mobile, 3-column on medium+) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {memberDetails.slice(0, 3).map((member) => (
          <Member
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            instagram={member.instagram}
          />
        ))}
      </div>

      {/* Second row with 2 members (centered in medium+ screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:justify-center">
        {memberDetails.slice(3, 5).map((member) => (
          <Member
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default Teammember;
