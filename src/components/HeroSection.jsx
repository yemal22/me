// src/components/HeroSection.jsx
import React from 'react';

function HeroSection({ title, subtitle, backgroundImage }) {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <section style={heroStyle} className="shadow-md relative">
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated Content */}
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md font-sans">{title}</h1>
        <p className="text-lg drop-shadow-md font-serif">{subtitle}</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold rounded shadow-md font-sans">
          En savoir plus
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-300 rounded-full opacity-30 animate-bounce-slow delay-2"></div>
    </section>
  );
}

export default HeroSection;
