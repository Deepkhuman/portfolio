import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/80 py-8 sm:py-12 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-24 sm:h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10 text-center sm:text-left">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center sm:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-cyan-500/20">
              DK
            </span>
            <span className="font-bold text-sm tracking-wide text-white">
              Devang Khuman
            </span>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-400">
            MERN Stack Developer • Building high-performance web applications.
          </p>
        </div>

        {/* Quote */}
        <p className="text-[11px] sm:text-xs text-slate-500 font-mono">
          "Code is like humor. When you have to explain it, it’s bad."
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 active:scale-95 transition-all cursor-pointer text-xs font-semibold min-h-[40px]"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <FaArrowUp className="text-cyan-400 text-xs group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-5 border-t border-white/5 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Devang Khuman. Crafted with precision, React & modern 3D design.
      </div>
    </footer>
  );
};

export default Footer;
