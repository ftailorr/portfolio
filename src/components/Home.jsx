import React from "react";
import HeroImage from "../assets/heroImage.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-light-beige to-medium-beige min-h-screen flex items-center justify-center px-4"
      style={{ height: "50vh" }}
    >
      <div className="max-w-screen-lg mx-auto px-4 h-full flex flex-col justify-center">
        <nav className="flex items-center justify-between py-10">
          {/* Navbar content */}
        </nav>
        <div className="flex flex-col md:flex-row py-30">
          <div className="flex flex-col justify-center md:w-1/2">
            <h2 className="text-4xl sm:text-7xl font-bold px-6 py-4 text-center sm:text-left">
              Fanny Tailor
            </h2>
            <p className="text-black py-2 px-6 max-w-md sm:ml-6 md:ml-0 md:mt-0">
              Software Engineer driven by a relentless curiosity and a passion
              for innovation.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-black w-fit px-6 py-3 mx-2 flex items-center rounded-bs cursor-pointer"
              >
                Portfolio
                <span className="px-1 hover:rotate-90 transform transition-transform duration-300">
                  <BsArrowRightCircle size={19} className="ml-1" />
                </span>
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="group text-black w-fit px-6 py-3 mx-2 flex items-center rounded-bs cursor-pointer"
              >
                Reach Out
                <span className="px-1 hover:rotate-90 transform transition-transform duration-300">
                  <BsArrowRightCircle size={19} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;