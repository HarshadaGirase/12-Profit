import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAOS from "../../customHooks/useAOS";
import logo from "../../assets/Logo/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Navigation hook

  // Check if the current route is "/about-us"
  const isAboutUsPage = location.pathname === "/about-us";

  useAOS();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`w-full py-2 md:py-6 px-6 sm:px-12 flex items-center font-agrandirRegular justify-between ${
        isAboutUsPage ? "bg-[#E6E4DF]" : "bg-[#0c2d57]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center text-2xl  py-4">
        <Link to="/">
          <img src={logo} width={130} alt="Logo" />
        </Link>
      </div>

      {/* Menu Button for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#dda409]  focus:outline-none"
        >
          {/* Hamburger Icon */}
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Buttons */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute sm:static text-md top-20 md:bg-transparent bg-[#0c2d57] left-0 w-full z-10 h-screen sm:h-fit sm:w-auto sm:flex space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-0`}
      >
        <button
          className={`px-4 py-2 rounded-full transition duration-300 w-full sm:w-auto ${
            isAboutUsPage ? "text-black" : "text-[#dda409] "
          }`}
        >
          <Link to="/admin_panel" className="tracking-widest">
            Admin Panel
          </Link>
        </button>
        <button
          className={`px-4 py-2 rounded-full  transition duration-300 w-full sm:w-auto ${
            isAboutUsPage ? "text-black" : "text-[#dda409] "
          }`}
        >
          <Link to="/about-us" className="tracking-widest">
            About Us
          </Link>
        </button>
        <button
          className="relative border border-[#dda409]  text-[#dda409]  p-4 font-medium overflow-hidden transition duration-300 w-full sm:w-auto group"
          onClick={() => navigate("/invest/invest-form")}
          data-aos="zoom-in"
        >
          <span className="absolute inset-0 w-0 bg-[#dda409]  transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative z-10 text-inherit group-hover:text-[#0c2d57]">
            Invest Now
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
