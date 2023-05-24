import React from "react";

import { SlSocialGithub } from "react-icons/sl";

import { CiMail } from "react-icons/ci";

import { RiLinkedinLine } from "react-icons/ri";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <RiLinkedinLine size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/fanny-tailor/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <SlSocialGithub size={35} />
        </>
      ),
      href: "https://github.com/ftailorr",
    },
    {
      id: 3,
      child: (
        <>
          Mail <CiMail size={35} />
        </>
      ),
      href: "mailto: fan.tailor21@gmail.com",
    },
  ];

  return (
    <div className="hidden md:flex flex flex-col top-[35%] left-0 fixed text-lg">
      <ul>
        {links.map(({ id, child, href, style }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-medium-dark-beige ml-[-100px]" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-40 target='_blank' rel=noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
