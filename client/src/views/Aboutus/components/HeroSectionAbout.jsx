import React from "react";
import Image from "../../../assets/Images/AboutPageImage.jpg";

const HeroSectionAbout = () => {
  return (
    <section className="bg-[#E6E4DF] min-h-screen flex items-center  text-justify ">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center lg:justify-between md:gap-10 text-justify p-13 mb-10">
        {/* Left Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left mb-20  align-justify font-Arial lg:ml-6 lg:p-10">
          <h1 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl  text-[#0c2d57] mb-4 sm:mb-12 md:mb-15 lg:mb-20  text-left sm:text-left lg:text-left">
            Who are we?
          </h1>
          <p className="text-[15px]  lg:text-lg  text-[#0c2d57] mb-4 text-justify ">
            <strong>
              {" "}
              Welcome to 12% Profit, a channel partner of London Trading Index
              (LTI), a trusted name in financial services with a proven track
              record of managing $90 million in assets for high-net-worth
              individuals and institutional investors.
            </strong>
          </p>
          <p className=" text-[15px]   lg:text-[16px] text-[#0c2d57] mb-4 text-justify">
            Our commitment to quality and compliance is reflected in our
            multiple regulatory registrations across six various regions. 12%
            Profit is based on the idea that hedge funds perform better when
            they remain small and independent. By creating small, franchise-like
            trading units, we aim to enhance performance and maintain the
            agility and charm that large hedge funds often lose.
          </p>

          <p className="text-[15px]  lg:text-[16px]  text-[#0c2d57] mb-4  text-justify">
            {" "}
            At LTI, we believe in transparency, guaranteed returns, and robust
            customer support. Our new initiative, 12% Profit, is designed to
            offer retail investors stable and attractive returns, providing a
            reliable investment option regardless of market conditions. With
            fixed return rates and a focus on transparent fund management, we
            aim to build trust and ensure financial planning certainty for all
            our clients. London Trading Index is regulated by FSA SVG.{" "}
          </p>

          <p className=" text-[15px]   lg:text-[16px] text-[#0c2d57]  text-justify">
            Join us as we expand into the retail mutual funds market, offering
            innovative investment solutions backed by strategic marketing and
            community engagement. Let LTI be your partner in achieving financial
            growth and stability.
          </p>
        </div>

        {/* Right Image Section */}
        <div className=" ">
          <img
            src={Image}
            alt="Hero Image"
            className="shadow-lg  object-cover h-72 md:h-80 lg:h-[25rem] xl:h-[32rem] lg:mt-auto lg:mr-[90px] mb-0 sm:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;
