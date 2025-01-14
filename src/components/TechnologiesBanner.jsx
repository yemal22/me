// src/components/TechnologiesBanner.jsx
import React from 'react';
import { technologies } from '../data/technologies';

function TechnologiesBanner() {
  return (
    <div className="overflow-hidden bg-gray-100 py-4">
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: 'scroll-circular 20s linear infinite' }}
      >
        {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-4 px-6 py-2 bg-white shadow-md rounded-full border"
          >
            <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
            <span className="text-lg font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-circular {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default TechnologiesBanner;