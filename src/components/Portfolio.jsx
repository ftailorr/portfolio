import React from "react";

import fansFitness from "../assets/portfolio/fansFitness.jpg";
import reactMeetups from "../assets/portfolio/reactMeetups.jpg";
import toDoApp from "../assets/portfolio/toDoApp.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: fansFitness,
//       title: "Fitness Webpage",
//       url: "https://fansfitness.netlify.app/", // Add the URL for the Fitness Webpage
//     },
//     {
//       id: 2,
//       src: reactMeetups,
//       title: "Meetups Page",
//       url: "https://meetup-pages.vercel.app/", // Add the URL for the Meetups Page
//     },
//     {
//       id: 3,
//       src: toDoApp,
//       title: "To Do Application",
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-medium-beige to-medium-dark-beige w-full text-black md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline">Portfolio</p>
//           <p className="py-6">Check out some of my work</p>
//         </div>

//         <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src, title, url }) => (
//             <div key={id} className="rounded-lg">
//               <img src={src} alt="" className="rounded-md " />
//               <div className="flex items-center justify-center">
//                 {url ? (
//                   <a href={url} target="_blank" rel="noopener noreferrer">
//                     <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-3xl">
//                       {title}
//                     </button>
//                   </a>
//                 ) : (
//                   <button className="w-1/2 px-6 py-3 m-4 font-bold text-3xl">
//                     {title}
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fansFitness,
      title: "Fitness Webpage",
      url: "https://fansfitness.netlify.app/",
    },
    {
      id: 2,
      src: reactMeetups,
      title: "Meetups Page",
      url: "https://meetup-pages.vercel.app/",
    },
    {
      id: 3,
      src: toDoApp,
      title: "To Do Application",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-medium-dark-beige to-dark-beige w-full text-black md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <br />
          <p className="text-4xl font-bold text-center">Portfolio</p>
          <p className="py-6 text-center text-2xl">
            Check out some of my work!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 justify-center">
          {portfolios.map(({ id, src, title, url }) => (
            <div key={id} className="rounded-lg flex flex-col items-center">
              <img src={src} alt="" className="rounded-md" />
              <div className="flex justify-center mt-4">
                <p className="text-xl font-bold"></p>
              </div>
              <div className="flex justify-center mt-4">
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-3xl">
                      {title}
                    </button>
                  </a>
                ) : (
                  <button className="px-6 py-3 m-4 font-bold text-3xl">
                    {title}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;