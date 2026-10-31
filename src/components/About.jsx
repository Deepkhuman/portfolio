import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaLaptopCode, FaServer, FaShieldAlt, FaRocket, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import data from '../../Data.json';

const About = () => {
  const [userData] = useState(data);

  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-semibold text-cyan-400">
          <FaLaptopCode />
          <span>Background & Vision</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering With <span className="text-gradient-cyan">Precision & Passion</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Transforming complex engineering challenges into fluid, high-performing web applications.
        </p>
      </div>

      {/* 3D Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento Item 1: Bio & Story (Span 2) */}
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#38bdf8"
          glarePosition="all"
          className="md:col-span-2 rounded-3xl"
        >
          <div className="h-full glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden border border-white/10">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg">
                  <FaRocket />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Full-Stack Journey</h3>
                  <span className="text-xs text-slate-400">Architecting modern web ecosystems</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {userData.about.description}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                I focus heavily on writing clean, modular code, optimizing database query performance in MongoDB & SQL, and building snappy frontend interfaces using modern React conventions and 3D visual touches.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 flex flex-wrap gap-2 relative z-10 border-t border-white/5 mt-6">
              {['Scalable Architecture', 'MERN Ecosystem', 'Clean Code', 'RESTful APIs', 'Modern 3D UI'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </Tilt>

        {/* Bento Item 2: Interactive Code Snippet Window */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#818cf8"
          className="rounded-3xl"
        >
          <div className="h-full glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between border border-white/10 font-mono text-xs">
            {/* Window header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-slate-500 text-[11px]">devang.config.ts</span>
              </div>

              {/* Code preview */}
              <div className="space-y-1.5 text-slate-300">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">engineer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{userData.user.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"MERN Stack Specialist"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">skills:</span> [
                  <span className="text-amber-300">"React"</span>,{' '}
                  <span className="text-amber-300">"Node"</span>,{' '}
                  <span className="text-amber-300">"Mongo"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">performanceObsessed:</span>{' '}
                  <span className="text-cyan-400">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">"Ready to deploy"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <FaCheckCircle size={10} /> 0 errors, 0 warnings
              </span>
              <span>UTF-8</span>
            </div>
          </div>
        </Tilt>

        {/* Bento Item 3: Core Engineering Pillars */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.15}
          className="rounded-3xl"
        >
          <div className="h-full glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between border border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FaServer />
                </span>
                <h4 className="font-bold text-white text-base">Backend & APIs</h4>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Expertise in Node.js, Express, middleware authorization, REST architectural standards, and data modeling.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              Fast response times & reliability
            </div>
          </div>
        </Tilt>

        {/* Bento Item 4: UI & 3D Interactive Design */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.15}
          className="rounded-3xl"
        >
          <div className="h-full glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between border border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FaShieldAlt />
                </span>
                <h4 className="font-bold text-white text-base">Modern UI & 3D UX</h4>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Building intuitive user interfaces with Tailwind CSS, micro-interactions, responsive grids, and subtle 3D depth.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Pixel-perfect across all screen sizes
            </div>
          </div>
        </Tilt>

        {/* Bento Item 5: Location & Availability */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.15}
          className="rounded-3xl"
        >
          <div className="h-full glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between border border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FaMapMarkerAlt />
                </span>
                <h4 className="font-bold text-white text-base">Global Availability</h4>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Available for worldwide remote contracts, engineering teams, and freelance collaborations.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Open to new opportunities
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default About;
