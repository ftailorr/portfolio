import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-medium-beige to-medium-beige md:mt-0 pt-16 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline md:text-left px-2 py-4">About Me</p>
        </div>

        <p className="text-xl mt-5 md:mt-20">
          I recently graduated from Rutgers University with a degree in Computer
          Science, specializing in web development. With a solid foundation in
          programming languages and an expertise in building dynamic and
          responsive web applications, I am passionate about creating
          exceptional user experiences. I enjoy working with HTML, CSS,
          JavaScript, and frameworks like React and Node.js to bring ideas to
          life on the web. Leveraging my knowledge of web development best
          practices, I strive to create intuitive interfaces, optimize
          performance, and ensure seamless functionality across various devices.
          Continuously staying updated with the latest trends and advancements
          in web development, I am excited to apply my skills and contribute to
          cutting-edge projects in the field.
        </p>
        <br />

        <p className="text-xl mt-4">
          Apart from my technical pursuits, I am a firm believer in continuous
          learning and growth. I actively seek opportunities to expand my
          knowledge beyond web development, whether it's exploring design
          principles, UX/UI, or diving into backend technologies. I find that
          incorporating these interdisciplinary skills enhances my ability to
          create well-rounded and impactful web solutions. Furthermore, I am a
          strong advocate for collaboration and teamwork. I thrive in
          environments where creative ideas are encouraged, and I enjoy working
          closely with multidisciplinary teams to bring visions to reality. As I
          embark on this new phase of my career, I am enthusiastic about
          connecting with like-minded professionals and organizations that value
          innovation, creativity, and excellence in web development. Together,
          let's push the boundaries of what is possible on the web and shape the
          future of digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
