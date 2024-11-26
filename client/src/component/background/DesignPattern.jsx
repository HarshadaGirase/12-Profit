import React from "react";

const DesignPattern = () => {
  return (
    <div className=" bg-[#0c2da1] w-full h-screen overflow-hidden">
      <div className="grid grid-cols-6 gap-6 pattern">
        {Array.from({ length: 36 }).map((_, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-24 h-24"
          >
            {/* First Circle */}

            {/* Diagonal Stripe */}
            <div className="absolute w-8 h-32 bg-[#0b2649] transform rotate-45"></div>
            <div className="absolute top-4 right-32 w-10 h-10 bg-[#0b2649] rounded-full"></div>

            {/* Second Circle */}
            {/* <div className="absolute bottom-4 w-10 right-32 h-10 top-20 bg-blue-600 rounded-full"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignPattern;
