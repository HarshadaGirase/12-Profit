import { Link } from "react-router-dom";
import useAOS from "../../../customHooks/useAOS";

const ConnectWithUs = () => {
  useAOS();
  return (
    <section className="bg-[#dda409] py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-[16px] sm:text-[20px] lg:text-[20px] tracking-wider text-black font-normal mb-2 sm:mb-4 lg:mb-12 ">
          CONNECT WITH US
        </h2>
        <p
          className="text-3xl sm:text-lg lg:text-4xl font-agrandirLight text-white mb-2 sm:mb-4  lg:mb-10 font-cursive"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          The road to financial success starts with a single step. Reach out to
          us and start your journey today.
        </p>
        <div data-aos="zoom-in" data-aos-delay="400" className="lg:mb-12">
          <Link
            to={"/invest/invest-form"}
            className="bg-white text-[#FFC013] py-[20px] px-[100px] sm:py-6 sm:px-14 lg:py-6 lg:px-[140px] rounded-md text-lg font-light hover:bg-[#FBE28D] mb-6 sm:mb-4 lg:mb-10 "
          >
            <button className="mt-[60px]">INVEST</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
