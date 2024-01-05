import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As a seasoned web developer, I bring a wealth of experience across a
          spectrum of technologies. My proficiency in front-end development is
          underscored by mastery in crafting responsive interfaces using HTML,
          CSS, and popular frameworks like Bootstrap and Tailwind CSS.
        </p>
        <br />
        <p className="text-xl">
          My expertise extends to dynamic front-end libraries such as React and
          Vue, where I excel in building interactive components that elevate
          user experiences. On the server side, I leverage Node.js and Express
          to develop robust and scalable applications.
        </p>
        <br />
        <p className="text-xl">
          Database management is a forte, encompassing both relational databases
          like SQL, where I optimize structures for efficient data handling, and
          NoSQL solutions like MongoDB, adding versatility to my skill set.
        </p>
        <br />
        <p className="text-xl">
          My portfolio includes diverse projects, showcasing end-to-end
          development capabilities. The pursuit of innovation remains a
          constant, with a commitment to staying current with industry trends
          and emerging technologies, ensuring a holistic approach to web
          development challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
