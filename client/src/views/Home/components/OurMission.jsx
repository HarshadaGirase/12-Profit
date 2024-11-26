import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/logoImage.png";
import useAOS from "../../../customHooks/useAOS";

const OurMission = () => {
  useAOS();
  return (
    <div className="md:py-8 ">
      <h4 className="md:block hidden text-sm uppercase tracking-widest  text-gray-800 mb-4 font-normal px-16 pt-20">
        Our Mission
      </h4>
      <section className="flex flex-col-reverse items-center px-6 md:px-32 md:flex-row justify-center bg-white md:py-16">
        {/* Text Section */}
        <div
          className="md:w-1/2 sm:w-full flex flex-col md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <h4 className="md:hidden text-sm  uppercase tracking-widest  text-gray-800 mb-4 font-normal md:px-16">
            Our Mission
          </h4>
          <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-8 md:mb-10">
            At 12%Profit, we provide investors straightforward plans with
            transparent returns, eliminating the complexities and risks of
            traditional investments.
          </p>
          <div className="flex  md:justify-start mt-10">
            <Link to="/invest/invest-form">
              <button
                className="px-16 md:px-24 py-3 md:py-6 border border-[#dda409] text-[#dda409] hover:bg-[#dda409] hover:text-white transition duration-300"
                aria-label="Invest now"
              >
                INVEST
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:w-1/2 my-6">
          <img
            src={logo}
            alt="Our Mission Logo"
            className="w-1/2 sm:w-1/2 max-w-[300px] md:max-w-none"
          />
        </div>
      </section>
    </div>
  );
};

export default memo(OurMission);
