import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-8 text-center">
      <div className="relative z-10">
        {/* Fancy Coding Line Effect */}
        <p className="text-4xl font-extrabold opacity-90 text-shadow-lg">
          <span className="border-t-4 border-white pt-2 mt-2 px-4 inline-block">
            <code className="font-mono text-lg">Devang Khuman</code>
          </span>
        </p>
        <p className="mt-4 text-lg opacity-70">
          <code className="font-mono">Designed with passion and attention to detail</code>
        </p>
        
        {/* Coding Quote */}
        <blockquote className="mt-8 text-xl italic opacity-80 text-gray-300">
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>
        <p className="mt-2 text-sm opacity-60">- Cory House</p>
      </div>

      {/* Optional subtle shine or glow effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </footer>
  );
};

export default Footer;
