import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-red-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold tracking-wide text-white mb-6 uppercase">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Whether you have a question, an opportunity, or just want to say hello — my inbox is always open.
        </p>
        <a
          href="mailto:devangkhuman2003@gmail.com"
          className="group inline-flex items-center justify-center gap-3 text-lg font-semibold text-red-500 bg-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50 hover:bg-gray-100"
        >
          <span className="group-hover:tracking-wider transition-all duration-300">
            Email Me
          </span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
