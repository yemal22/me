// src/components/Technologies.jsx
import React from 'react';
import { technologies } from '../data/technologies';

function Technologies() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Technologies maîtrisées</h2>
      <ul className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-3xl">{tech.icon}</span>
            <span className="text-lg font-medium">{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Technologies;

