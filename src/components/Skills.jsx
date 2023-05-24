import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import dsa from "../assets/dsa.png";
import firebase from "../assets/firebase.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJS",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
    },
    {
      id: 8,
      src: node,
      title: "NodeJS",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
    },
    {
      id: 11,
      src: firebase,
      title: "FireBase",
    },
    {
      id: 12,
      src: dsa,
      title: "Data Structures & Algorithms",
    },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-medium-beige to-medium-dark-beige w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold p-2 inline">Skills</p>
          <p className="py-6 text-2xl"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={"hover:scale-105 duration-500 py-2 rounded-lg"}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
