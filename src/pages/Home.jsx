// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div>
      <HeroSection
        title="Bienvenue sur mon portfolio"
        subtitle="Découvrez mes projets, certifications et bien plus encore !"
        backgroundImage="/assets/images/hero-bg.webp" // Ajoutez une image dans le dossier public/assets
      />
      <section className="text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Explorez mon univers</h2>
        <p className="text-lg">
          Ce portfolio présente mes réalisations, mes compétences et mes objectifs. N'hésitez pas à naviguer pour en savoir plus !
        </p>
      </section>
    </div>
  );
}

export default Home;
