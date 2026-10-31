import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaGithub, FaRocket, FaCode } from 'react-icons/fa';
import sumangal from '../assets/sumangal.webp';
import cryptoverse from '../assets/cryptoverse.webp';
import parkme from '../assets/parkme.webp';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Sumangal Matrimony',
      tagline: 'Dedicated Matchmaking & Matrimonial Platform',
      description:
        'A full-featured matrimonial platform built with modern UI/UX principles and robust backend logic. Features secure user registration, advanced search filtering, real-time profile management, and matchmaking criteria tailored for Indian families.',
      category: 'Full-Stack',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: sumangal,
      liveUrl: 'https://sumangalglobal.com/',
      githubUrl: 'https://github.com/Deepkhuman',
      featured: true,
      badge: 'Production',
    },
    {
      title: 'Crypto Verse',
      tagline: 'Real-Time Cryptocurrency Analytics & Dashboard',
      description:
        'A comprehensive cryptocurrency tracker utilizing live API feeds. Provides real-time market statistics, price fluctuations, top coin analytics, interactive financial charts, and cryptocurrency global rankings.',
      category: 'Frontend & API',
      tags: ['React', 'RapidAPI', 'Tailwind CSS', 'Chart.js', 'Vite'],
      image: cryptoverse,
      liveUrl: '#',
      githubUrl: 'https://github.com/Deepkhuman',
      featured: false,
      badge: 'Interactive',
    },
    {
      title: 'Park.Me',
      tagline: 'Smart Vehicle Parking & Slot Management System',
      description:
        'A full-cycle smart vehicle parking management system. Automates parking space allocation, vehicle check-in/check-out timestamps, real-time slot vacancy tracking, and role-based administrative dashboards.',
      category: 'Full-Stack',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST'],
      image: parkme,
      liveUrl: 'https://github.com/Deepkhuman/Park.me',
      githubUrl: 'https://github.com/Deepkhuman/Park.me',
      featured: false,
      badge: 'System Architecture',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Frontend & API'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-semibold text-cyan-400">
          <FaRocket />
          <span>Featured Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Selected <span className="text-gradient-cyan">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          A showcase of real-world web applications built with scalability, user experience, and robust architecture.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects 3D Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <Tilt
            key={project.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#38bdf8"
            glarePosition="all"
            glareBorderRadius="24px"
            className="rounded-3xl"
          >
            <div className="h-full glass-panel glass-panel-hover rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden group">
              {/* Project Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-500 bg-white/5 cursor-not-allowed">
                      <span>Internal Demo</span>
                    </span>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub for ${project.title}`}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all cursor-pointer"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
