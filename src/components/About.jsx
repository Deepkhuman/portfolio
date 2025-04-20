import React, { useEffect, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import data from "../../Data.json"; // Import the centralized JSON data

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setUserData(data); // Directly assign data from JSON
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="About"
      className="relative px-6 mt-4 py-24 text-center text-white bg-black overflow-visible"
    >
      {/* Glowing animated background */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-red-500 opacity-20 rounded-full blur-2xl animate-float-delay-1"></div>
      <div className="absolute top-32 right-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-2xl animate-float-delay-2"></div>

      {/* Floating tech icons with different animation delays */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <FaReact className="absolute text-blue-400 text-5xl animate-spin-slow top-20 left-14 animation-delay-2000" />
        <FaNodeJs className="absolute text-green-400 text-5xl animate-float top-1/2 right-20 animation-delay-3000" />
        <FaDatabase className="absolute text-yellow-400 text-5xl animate-float bottom-20 left-1/3 animation-delay-4000" />
        <FaJsSquare className="absolute text-yellow-500 text-5xl animate-float top-1/4 right-1/3 animation-delay-5000" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-6">{userData.about.title}</h2>
        <p className="text-xl font-semibold text-gray-300 font-light animate-fade-slide-up">
          {userData.about.description}
        </p>
      </div>
    </section>
  );
};

export default About;
