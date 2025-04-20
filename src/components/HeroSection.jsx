import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";
import data from "../../Data.json"; // Direct import of the JSON data

// Initialize AOS
Aos.init();

const HeroSection = ({ onScrollToProjects }) => {
  const [userData, setUserData] = useState(data); // Directly use the imported data

  // If data is not loaded, show a loading state
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative mt-26 bg-black text-white h-screen w-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-50 left-100 w-92 h-92 bg-red-500 opacity-10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl animate-ping z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-screen-lg mx-auto px-6">
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            draggable={false}
            src={userData.user.profile_picture_url}
            alt="Ninja Illustration"
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain drop-shadow-2xl animate-updown"
          />
        </div>

        <div
          className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left"
          data-aos="fade-up-left"
          data-aos-duration="1500"
        >
          <h1 className="text-4xl md:text-5xl font-bold whitespace-nowrap inline-block mb-4">
            <Typewriter
              options={{
                strings: [
                  `Hello, I'm ${userData.user.name} 💻`,
                  "I Build Scalable Web Apps 🔥",
                  "I Vibe Coding...❤",
                ],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 15,
                pauseFor: 1500,
              }}
            />
          </h1>

          <p
            className="text-lg text-gray-300 max-w-md mx-auto md:mx-0"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            {userData.user.description}
          </p>

          {/* Call to Action Buttons */}
          <div
            className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onScrollToProjects();
              }}
              className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              🚀 View Projects
            </a>

            <a
              href={userData.user.resume_url}
              download
              className="bg-[#ff0000] !text-white hover:!text-black px-4 py-2 rounded-full font-semibold hover:bg-white border border-red-700 transition-all duration-300"
            >
              <span className="flex justify-center items-center gap-2">
                <FaDownload /> Download Resume
              </span>
            </a>
          </div>

          <div
            className="flex items-center justify-center md:justify-start space-x-6 mt-6 text-2xl text-white"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1200"
          >
            {userData.social_links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform === "GitHub" && <FaGithub className="shine-hover hover:text-red-500 hover:scale-125 transition duration-300 ease-in-out cursor-pointer" />}
                {link.platform === "LinkedIn" && <FaLinkedin className="shine-hover hover:text-red-500 hover:scale-125 transition duration-300 ease-in-out cursor-pointer" />}
                {link.platform === "Twitter" && <FaTwitter className="shine-hover hover:text-red-500 hover:scale-125 transition duration-300 ease-in-out cursor-pointer" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
