import React, { memo } from "react";
import { Link } from "react-router-dom";
import UnderLine from "../../../component/UnderLine/UnderLine";

const Step = memo(({ number, title, description, delay }) => (
  <div
    className="flex flex-col items-center"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="relative text-4xl lg:text-6xl mb-2 font-medium text-black">
      {number}
      <UnderLine />
    </div>
    <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
    <p className="lg:m-12 text-center text-lg text-gray-900 font-agrandirNarrow py-4">
      {description}
    </p>
  </div>
));

const HowToInvest = () => (
  <section className="bg-[#e1dfd9] py-16 font-normal">
    <div className="container mx-auto text-center">
      <h2
        className="text-4xl md:text-5xl lg:text-6xl mb-20 font-light"
        data-aos="fade-up"
      >
        How to Invest?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        <Step
          number="1"
          title="Choose your plan"
          description="Whether you prefer lumpsum or a monthly investment approach, we have options tailored for you."
          delay="100"
        />
        <Step
          number="2"
          title="Submit your form"
          description="Fill out a simple form with your contact details and investment preferences."
          delay="200"
        />
        <Step
          number="3"
          title="Invest"
          description="Invest, sit back and watch your investment grow."
          delay="300"
        />
      </div>
      <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
        <Link to="/invest/invest-form">
          <button
            className="px-6 py-5 w-[300px] text-yellow-600 font-semibold rounded-md hover:bg-yellow-600 hover:text-white border border-yellow-600 transition"
            aria-label="Invest now"
          >
            INVEST
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default memo(HowToInvest);
