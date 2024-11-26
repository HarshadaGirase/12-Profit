import React from 'react'
import useAOS from "../../../customHooks/useAOS";

const HeroSection = () => {
  useAOS();

  return (
    <section className="bg-[#0c2d57] text-white md:py-6  flex flex-col font-agrandirRegular ">
      {/* Header Section */}

      {/* Hero Content Section */}
      <div className="flex-grow flex items-center justify-center lg:-tracking-[2.4px] text-3xl md:text-4xl lg:text-4xl lg:pt-24 py-4 md:pb-14 md:pt-10">
        <div className=" text-center space-y-20 lg:px-32 px-5 ">
          {/* Main Text */}

          <p data-aos="fade-right">
            Just invest, and we handle the rest, ensuring your money works for
            you while you sit back and relax.
            <p data-aos="fade-left" className="text-[#dda409] pt-2 ">
              Sensible Returns, Zero Fees.
            </p>
          </p>
        </div>
      </div>
      <p
        data-aos="zoom-in "
        className=" text-2xl md:text-5xl lg:text-6xl text-center py-10"
      >
        The Future of Investing
      </p>
    </section>
  );
};

export default React.memo(HeroSection);
