// src/pages/About.jsx
import React from 'react';
import Technologies from '../components/Technologies';

function About() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">À propos de moi</h1>
      <p>
        Je suis Yémalin Emile Morel KPAVODE, passionné par l'intelligence artificielle et la science des données. Mon objectif est de résoudre des problèmes pratiques à travers la technologie.
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Éducation</h2>
        <ul className="list-disc pl-5">
          <li>Licence en Mathématiques, FAST</li>
          <li>Licence en TIC, IMSP</li>
          <li>Formations diverses en Data Science et IA</li>
        </ul>
      </div>

      {/* Inclure la section Technologies */}
      <Technologies />
    </section>
  );
}

export default About;
