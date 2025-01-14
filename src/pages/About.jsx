// src/pages/About.jsx
import React from 'react';
import TechnologiesBanner from '../components/TechnologiesBanner';
import EducationSection from '../components/EducationSection';

function About() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">À propos de moi</h1>
      <p className="mb-6 text-lg">
        Je suis Yémalin Emile Morel KPAVODE, un passionné de l'intelligence artificielle et de la science des données.
        Mon objectif est de résoudre des problèmes pratiques à travers des solutions technologiques innovantes. Avec une
        formation solide en mathématiques et en technologies de l'information, je m'efforce de combiner rigueur
        scientifique et créativité pour relever les défis complexes.
      </p>

      {/* Section Éducation */}
      <div className="mb-10">
        <EducationSection />
      </div>

      {/* Section Technologies */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Technologies maîtrisées</h2>
        <TechnologiesBanner />
      </div>
    </section>
  );
}

export default About;
