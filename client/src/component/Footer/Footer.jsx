import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false); // State for showing the message

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowMessage(true); // Show the "Thank You!" message
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Animation easing
      once: true, // Trigger animation once
    });
  }, []);

  return (
    <footer className="bg-white py-10 px-4 sm:px-8 md:px-16 font-normal h-screen">
      {/* Horizontal Divider */}
      <hr className="border-t border-yellow-500 w-full mb-10" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        {/* Left Section - Email Text */}
        <div
          className="flex flex-col w-full md:w-1/3 space-y-4  md:text-left"
          data-aos="zoom-in"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800">
            Leave us your email to stay informed
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-light">
            Subscribe with your email to receive our latest updates and news.
          </p>
          <div className="flex w-full items-center " data-aos="zoom-in">
            <form
              className="flex flex-row items-center gap-4 w-full "
              onSubmit={handleSignUp}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-200 outline-none px-6 py-4 text-sm sm:text-base focus:border-yellow-500 transition"
              />
              <button
                className="bg-yellow-500 text-white px-4 py-2 sm:py-4 rounded-md text-sm sm:text-md hover:bg-yellow-600 transition"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
          {showMessage && (
            <p className="text-sm font-light text-gray-800  px-4 py-2">
              Thank You!
            </p>
          )}
          <p className="text-sm font-light text-gray-500">
            We respect your privacy.
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/2  md:flex-row justify-between items-start mt-10 space-y-8 md:space-y-0">
          {/* Quick Links */}
          <div className="flex flex-col  md:w-1/3 space-y-2" data-aos="zoom-in">
            <h3 className="text-md tracking-wider text-gray-800">LEARN</h3>
            <Link
              to="/about-us"
              className="text-yellow-500 hover:underline transition text-base"
            >
              ABOUT
            </Link>
          </div>

          {/* More Links */}
          <div
            className="flex flex-col w-full md:w-1/3 space-y-2"
            data-aos="zoom-in"
          >
            <h3 className="text-md  text-gray-800">CONTACT US</h3>
          </div>

          {/* Social Media Links */}
          <div
            className="flex flex-col w-full md:w-1/3 space-y-4"
            data-aos="zoom-in"
          >
            <h3 className="text-md  text-gray-800">CONNECT</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/12percent_profit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-700 transition text-xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.x.com/12PercentProfit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition text-xl"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.linkedin.com/company/12profit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@12PercentProfit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition text-xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://uk.pinterest.com/12PercentProfit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition text-xl"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Links */}

      {/* Bottom Section */}
      <div className="relative mt-56">
        <div className="text-center font-thin">
          <hr className="absolute inset-0 border-t border-yellow-500 w-full" />
          <h3 className="text-yellow-500 text-5xl sm:text-8xl md:text-[130px] lg:text-[200px] pt-4">
            12% Profit
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
