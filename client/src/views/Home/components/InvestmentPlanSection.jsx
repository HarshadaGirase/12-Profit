import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAOS from "../../../customHooks/useAOS";
import DesignPattern from "../../../component/background/DesignPattern";

const plans = [
  {
    title: "Secure Growth Plan",
    description: `Secure a stable and attractive return on your investment with our lumpsum investment plan, targeting a growth rate of 12%. With a minimum fixed investment of £5000, you can be invested for a longer period to see growth in a risk-free way. The minimum lock-in period for this plan is 12 months, post which you can withdraw without any early withdrawal charges.`,
    example: `Example: Value of £5000 invested for a period of 20 years would be £48,231. An estimated return of £43,231. This is the power of compounding.`,
    link: "/invest/fixed",
  },
  {
    title: "Systematic Investment Plan",
    description: `Secure a stable and attractive return on your investment with our periodic investment plan, targeting a growth rate of 12%. With a minimum monthly investment of £1000, you can confidently plan your financial future for longer periods. The minimum investment period for this plan is 12 months post which you can withdraw any early withdrawal charges.`,
    example: `Example: £1000 invested monthly for a period of 20 years, at a growth rate of 12% would be £999,148 vs the invested value of £240,000.`,
    link: "/invest/SIP",
  },
];

const InvestmentPlanSection = () => {
  useAOS();
  return (
    <div className="relative w-full overflow-hidden bg-[#181e4f] font-agrandirRegular text-white">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <DesignPattern />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col gap-14 p-6 sm:p-10 lg:p-20 leading-relaxed">
        {/* Heading Section */}
        <div className="text-center flex justify-center" data-aos="zoom-in">
          <h1 className="max-w-5xl text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-white tracking-tight ">
            Personalized simple investment plans for your present and future.
          </h1>
        </div>

        {/* Investment Plan Sections */}
        <div className="flex flex-col lg:flex-row md:gap-10 lg:gap-[8%]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 items-center lg:text-left"
            >
              <h1
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-agrandirLight"
                data-aos="fade-up"
              >
                {plan.title}
              </h1>
              <div className="lg:px-20 py-6 flex flex-col items-center font-agrandirWideLight">
                <div data-aos="fade-up ">{plan.description}</div>
                <br />
                <p data-aos="fade-up">{plan.example}</p>
                <div className="w-full border-t border-white mt-8"></div>
                <div className="my-10" data-aos="zoom-in" data-aos-delay="400">
                  <Link to={plan.link}>
                    <button className="w-56 sm:w-56 md:w-52 lg:w-64 py-4 sm:py-4 md:py-6 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300">
                      INVEST
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlanSection;
