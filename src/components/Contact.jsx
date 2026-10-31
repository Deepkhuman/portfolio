import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import {
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import data from '../../Data.json';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'devangkhuman2003@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 max-w-5xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-semibold text-cyan-400">
          <FaPaperPlane />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let’s Build Something <span className="text-gradient-cyan">Extraordinary</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
          Whether you have an upcoming project, engineering role, or just want to discuss tech — my inbox is always open.
        </p>
      </div>

      {/* Main 3D Contact Card */}
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.12}
        glareColor="#38bdf8"
        glarePosition="all"
        glareBorderRadius="28px"
        className="rounded-3xl"
      >
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl shadow-cyan-950/20">
          {/* Subtle top border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: Email & Direct Contact */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Response time: usually under 24 hours
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Drop me an email
                </h3>
                <p className="text-slate-400 text-sm">
                  Click below to copy my address or open your default mail client directly.
                </p>
              </div>

              {/* Email Copier Box */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-slate-900/90 border border-white/10 p-2.5 rounded-2xl">
                <div className="flex items-center gap-3 px-3 py-1 text-slate-300 font-mono text-xs sm:text-sm flex-1 truncate">
                  <FaEnvelope className="text-cyan-400 shrink-0" />
                  <span className="truncate">{email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-all cursor-pointer border border-white/5"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <span>Send Mail</span>
                    <FaPaperPlane size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Social Connect Pills */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-4 md:border-l md:border-white/5 md:pl-8">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Direct Profiles
              </span>

              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/deepkhuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white">GitHub</div>
                      <div className="text-[11px] text-slate-400">@deepkhuman</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/devang-khuman-364a28269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-xl text-indigo-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-400">Devang Khuman</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">↗</span>
                </a>

                <a
                  href="https://twitter.com/GetMemes93957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaXTwitter className="text-xl text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white">X / Twitter</div>
                      <div className="text-[11px] text-slate-400">@GetMemes93957</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-purple-400 transition-colors">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Contact;
