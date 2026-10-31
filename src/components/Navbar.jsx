import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({
  onScrollToHero,
  onScrollToAbout,
  onScrollToSkills,
  onScrollToProjects,
  onScrollToContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', onClick: onScrollToAbout },
    { label: 'Skills', onClick: onScrollToSkills },
    { label: 'Projects', onClick: onScrollToProjects },
    { label: 'Contact', onClick: onScrollToContact },
  ];

  const handleNavClick = (callback) => {
    setMobileMenuOpen(false);
    callback();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-8 py-3 sm:py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-2xl shadow-cyan-950/40 bg-slate-950/85 border border-white/10'
            : 'bg-slate-950/50 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={onScrollToHero}
          className="group flex items-center gap-2.5 cursor-pointer text-left focus:outline-none min-h-[44px]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs sm:text-sm shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            DK
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              Devang Khuman
            </span>
            <span className="block text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-cyan-400">
              MERN Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5">
          {navLinks.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer min-h-[36px]"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop Right Action / Status Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available
          </div>
          <button
            onClick={onScrollToContact}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer min-h-[38px]"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Glassmorphic Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto glass-panel bg-slate-950/95 backdrop-blur-2xl rounded-2xl p-4 border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ label, onClick }) => (
              <button
                key={label}
                onClick={() => handleNavClick(onClick)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-200 active:bg-white/10 transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span>{label}</span>
                <span className="text-xs text-cyan-400 font-mono">→</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for work
            </div>
            <button
              onClick={() => handleNavClick(onScrollToContact)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 active:scale-95 transition-all shadow-md"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
