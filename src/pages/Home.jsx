// src/components/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import TechnologiesBanner from '../components/TechnologiesBanner';

function Home() {
  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Bienvenue sur mon portfolio"
        subtitle="Explorez mes projets, certifications et compétences."
        backgroundImage={`${process.env.PUBLIC_URL}/assets/hero3.jpeg`}
      />

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Découvrez un passionné de technologie et d'innovation
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Avec une expertise en intelligence artificielle et en développement logiciel, je suis dédié à créer des solutions pratiques pour répondre aux défis du quotidien.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <TechnologiesBanner />
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-gray-800 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Envie de collaborer ?</h3>
        <p className="text-lg mb-6">
          N'hésitez pas à consulter mes projets ou à me contacter directement !
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-colors text-white font-semibold rounded shadow-md"
        >
          Me Contacter
        </a>
      </div>
    </section>
  );
}

export default Home;
