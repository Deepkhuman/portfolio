import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  
  const skills = [
    { icon: <FaReact className="text-5xl text-blue-400 mb-2 animate-spin-slow" />, label: 'React' },
    { icon: <FaNodeJs className="text-5xl text-green-400 mb-2 animate-float" />, label: 'Node.js' },
    { icon: <FaDatabase className="text-5xl text-yellow-300 mb-2 animate-pulse" />, label: 'MongoDB' },
    { icon: <FaServer className="text-5xl text-gray-300 mb-2 animate-float" />, label: 'Express' },
    { icon: <FaAws className="text-5xl text-orange-400 mb-2 animate-pulse" />, label: 'AWS' },
    { icon: <FaDocker className="text-5xl text-blue-300 mb-2 animate-bounce" />, label: 'Docker' },
    { icon: <FaLinux className="text-5xl text-yellow-200 mb-2 animate-float" />, label: 'Linux' },
    { icon: <SiTailwindcss className="text-5xl text-blue-200 mb-2 animate-pulse" />, label: 'Tailwind' },
    { icon: <FaGitAlt className="text-5xl text-orange-500 mb-2 animate-pulse" />, label: 'Git' },
    { icon: <FaHtml5 className="text-5xl text-orange-600 mb-2 animate-float" />, label: 'HTML5' },
    { icon: <FaCss3Alt className="text-5xl text-blue-500 mb-2 animate-bounce" />, label: 'CSS3' },
  ];

  return (
    <section
      id="skills"
      className="relative px-6 py-24 text-center text-white bg-black overflow-visible"
    >
      {/* Glowing background blobs */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-32 right-10 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-ping"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-['Space_Grotesk'] mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map(({ icon, label }, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.45}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="12px"
            >
              <div
                className="bg-gray-900 p-6 rounded-xl transition-transform transform hover:scale-110 hover:bg-gray-800 flex flex-col items-center shadow-xl"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                {icon}
                <h3 className="text-xl font-semibold">{label}</h3>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
