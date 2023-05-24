import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      title: "Home",
    },
    {
      id: 2,
      link: "about",
      title: "About",
    },
    {
      id: 3,
      link: "skills",
      title: "Skills",
    },
    {
      id: 4,
      link: "portfolio",
      title: "Portfolio",
    },
    {
      id: 5,
      link: "contact",
      title: "Contact",
    },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-transparent z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-5xl ml-2 text-white"> </h1>

        <div className="flex items-center">
          <div
            onClick={toggleNav}
            className="cursor-pointer pr-4 pl-2 z-10 text-white-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <ul className={`md:flex ${nav ? "flex flex-wrap justify-start" : "hidden"}`}>
            {links.map(({ id, link, title }) => (
              <li
                key={id}
                className={`px-2 md:px-4 cursor-pointer capitalize font-medium text-white text-xs md:text-base hover:scale-105 duration-200`}
                onClick={closeNav}
              >
                <Link to={link} smooth duration={500} onClick={closeNav}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;