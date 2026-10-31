import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaLayerGroup,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiJavascript, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const skills = [
    {
      name: 'React.js',
      category: 'Frontend',
      icon: <FaReact className="text-4xl text-cyan-400" />,
      color: 'rgba(56, 189, 248, 0.4)',
      level: 'Advanced',
      desc: 'Hooks, SPA, State Management',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: <FaNodeJs className="text-4xl text-green-400" />,
      color: 'rgba(74, 222, 128, 0.4)',
      level: 'Advanced',
      desc: 'Async I/O, REST APIs, Microservices',
    },
    {
      name: 'MongoDB',
      category: 'Database',
      icon: <SiMongodb className="text-4xl text-emerald-400" />,
      color: 'rgba(52, 211, 153, 0.4)',
      level: 'Advanced',
      desc: 'Schema Design, Aggregations, NoSQL',
    },
    {
      name: 'Express.js',
      category: 'Backend',
      icon: <SiExpress className="text-4xl text-slate-200" />,
      color: 'rgba(226, 232, 240, 0.3)',
      level: 'Advanced',
      desc: 'Routing, Middleware, Auth JWT',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Frontend',
      icon: <SiJavascript className="text-4xl text-yellow-400" />,
      color: 'rgba(250, 204, 21, 0.4)',
      level: 'Advanced',
      desc: 'Modern syntax, Promises, DOM',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: <SiTailwindcss className="text-4xl text-cyan-300" />,
      color: 'rgba(103, 232, 249, 0.4)',
      level: 'Advanced',
      desc: 'Responsive, Custom UI, Utility-first',
    },
    {
      name: 'Docker',
      category: 'DevOps',
      icon: <FaDocker className="text-4xl text-blue-400" />,
      color: 'rgba(96, 165, 250, 0.4)',
      level: 'Intermediate',
      desc: 'Containerization, Multi-stage builds',
    },
    {
      name: 'AWS Cloud',
      category: 'DevOps',
      icon: <FaAws className="text-4xl text-amber-500" />,
      color: 'rgba(245, 158, 11, 0.4)',
      level: 'Intermediate',
      desc: 'EC2, S3, Cloud Deployments',
    },
    {
      name: 'Git & GitHub',
      category: 'DevOps',
      icon: <FaGitAlt className="text-4xl text-orange-500" />,
      color: 'rgba(249, 115, 22, 0.4)',
      level: 'Advanced',
      desc: 'Branching, CI/CD, Team Workflows',
    },
    {
      name: 'Linux / Bash',
      category: 'DevOps',
      icon: <FaLinux className="text-4xl text-yellow-300" />,
      color: 'rgba(253, 224, 71, 0.4)',
      level: 'Intermediate',
      desc: 'Server Config, Shell Scripting, SSH',
    },
    {
      name: 'HTML5 Semantic',
      category: 'Frontend',
      icon: <FaHtml5 className="text-4xl text-orange-600" />,
      color: 'rgba(234, 88, 12, 0.4)',
      level: 'Expert',
      desc: 'Accessibility, Semantic SEO',
    },
    {
      name: 'CSS3 & 3D Web',
      category: 'Frontend',
      icon: <FaCss3Alt className="text-4xl text-blue-500" />,
      color: 'rgba(59, 130, 246, 0.4)',
      level: 'Advanced',
      desc: 'Flex, Grid, 3D Transforms',
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

  const filteredSkills =
    activeTab === 'All'
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-semibold text-cyan-400">
          <FaLayerGroup />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technologies & <span className="text-gradient-cyan">Frameworks</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Proven tools and technologies I use to build robust, production-ready web products.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill, index) => (
          <Tilt
            key={skill.name}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            perspective={800}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor={skill.color}
            glarePosition="all"
            glareBorderRadius="20px"
            className="rounded-2xl"
          >
            <div
              className="group h-full glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
              style={{
                boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.05)`,
              }}
            >
              {/* Subtle radial glow on card hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${skill.color} 0%, transparent 70%)`,
                }}
              ></div>

              <div className="relative z-10 flex items-start justify-between">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                  {skill.level}
                </span>
              </div>

              <div className="relative z-10 mt-5 space-y-1">
                <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-snug">
                  {skill.desc}
                </p>
              </div>

              <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>{skill.category}</span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Active
                </span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
