import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaRocket } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import HeroScene3D from './HeroScene3D';
import data from '../../Data.json';
import resumePdf from '../assets/Resume.pdf';

const HeroSection = ({ onScrollToProjects }) => {
  const [userData] = useState(data);

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <FaGithub size={16} />;
      case 'linkedin':
        return <FaLinkedin size={16} />;
      case 'twitter':
        return <FaXTwitter size={16} />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Column: Hero Content (Order 2 on mobile if 3D model goes first or Order 1) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] sm:text-xs font-semibold text-cyan-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Full-Stack Developer • MERN Specialist
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Crafting Scalable <br />
            <span className="text-gradient-cyan">Modern Web Apps</span> <br />
            & 3D Experiences.
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-base sm:text-lg font-medium text-slate-300 min-h-[32px] sm:min-h-[36px] flex items-center justify-center lg:justify-start">
            <span className="text-cyan-400 mr-2 font-mono">&gt;</span>
            <Typewriter
              options={{
                strings: [
                  "Building fast, responsive web systems 🔥",
                  "Architecting scalable MERN backends ⚡",
                  "Creating interactive, modern UI/UX 🚀",
                  "Passionate about clean code 💻",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
                pauseFor: 2000,
              }}
            />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-lg leading-relaxed">
            Hi, I'm <strong className="text-white font-semibold">{userData.user.name}</strong>. {userData.user.description}
          </p>

          {/* Action CTAs: Full-width on mobile, auto on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto pt-1">
            <button
              onClick={onScrollToProjects}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer min-h-[46px]"
            >
              <FaRocket className="text-xs group-hover:rotate-12 transition-transform" />
              <span>Explore 3D Projects</span>
              <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={resumePdf}
              download="Devang_Khuman_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass-panel glass-panel-hover hover:text-white active:scale-95 transition-all cursor-pointer min-h-[46px]"
            >
              <FaDownload className="text-xs text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links & Quick Connect */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mr-1">
              Connect:
            </span>
            {userData.social_links.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-900 transition-all active:scale-90 shadow-sm"
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/5 w-full max-w-md">
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">10+</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Projects Built</div>
            </div>
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">MERN</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Core Stack</div>
            </div>
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Code Quality</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Holographic Element */}
        <div className="lg:col-span-5 flex justify-center items-center py-4">
          <HeroScene3D />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
