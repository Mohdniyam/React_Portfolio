import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a MERN Full Stack Developer, I craft seamless digital experiences
          from concept to deployment. With expertise in MongoDB, Express.js,
          React.js, and Node.js, I build dynamic and responsive applications
          that captivate users. From designing intuitive interfaces to
          architecting robust backend systems, I thrive in delivering end-to-end
          solutions. My passion for clean code, efficient databases, and fluid
          user interactions drives me to create web solutions that leave a
          lasting impression. Let's shape the future of the web together
        </p>
      </div>
    </div>
  );
};

export default About;
