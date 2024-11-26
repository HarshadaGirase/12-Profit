import React from "react";
import useAOS from "../../../customHooks/useAOS";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useAOS();

  return (
    <div className="bg-white  text-[#0c2d57] font-normal flex justify-center py-16 md:py-20">
      {/* Small Header */}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-8 px-4 md:px-6 text-2xl sm:text-2xl md:text-2xl lg:text-4xl">
        <div
          className=" text-sm sm:text-sm  uppercase tracking-widest pb-4"
          data-aos="fade-down"
        >
          Hi there, we are 12%Profit
        </div>
        <div className="space-y-4 md:space-y-10 lg:space-y-20 text-[#0c2d57]">
          <h1 data-aos="fade-up">
            Channel Partner of London Trading Index having{" "}
            <span className="text-[#dda409]">$90 million</span> under
            management, offers investors a unique opportunity to achieve stable
            and attractive returns.
          </h1>
          <h1 data-aos="fade-up">
            At 12%Profit, you can enjoy predictable financial growth without the
            hassle with our transparent and zero-fee investment plans.
          </h1>{" "}
          <div className="mt-10" data-aos="zoom-in" data-aos-delay="400">
            <Link to="/invest/invest-form">
              <button className="bg-[#dda409] hover:bg-yellow-600 w-1/2 md:w-1/3 text-white text-sm py-4 md:py-6 px-6 rounded shadow-lg transition duration-300">
                INVEST
              </button>
            </Link>
          </div>
        </div>
        {/* Button */}
      </div>
    </div>
  );
};

export default HeroSection;
