// // src/pages/About.jsx
// import React from 'react';
// import TechnologiesBanner from '../components/TechnologiesBanner';
// import EducationSection from '../components/EducationSection';

// function About() {
//   return (
//     <section className="p-8">
//       <h1 className="text-3xl font-bold mb-6">À propos de moi</h1>
//       <p className="mb-6 text-lg">
//         Je suis Yémalin Emile Morel KPAVODE, un passionné de l'intelligence artificielle et de la science des données.
//         Mon objectif est de résoudre des problèmes pratiques à travers des solutions technologiques innovantes. Avec une
//         formation solide en mathématiques et en technologies de l'information, je m'efforce de combiner rigueur
//         scientifique et créativité pour relever les défis complexes.
//       </p>

//       {/* Section Éducation */}
//       <div className="mb-10">
//         <EducationSection />
//       </div>

//       {/* Section Technologies */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-bold mb-4">Technologies maîtrisées</h2>
//         <TechnologiesBanner />
//       </div>
//     </section>
//   );
// }

// export default About;


// src/pages/About.jsx
import React from 'react';
import TechnologiesBanner from '../components/TechnologiesBanner';
import EducationSection from '../components/EducationSection';

function About() {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">À propos de moi</h1>

      {/* Section avec la photo et le texte */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start mb-12">
        {/* Photo */}
        <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          <img
            src="/assets/profile.jpg" // Assurez-vous que ce chemin correspond au nom de votre fichier
            alt="Yémalin Emile Morel KPAVODE"
            className="w-48 h-48 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Texte */}
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Je suis Yémalin Emile Morel KPAVODE, passionné par l'intelligence artificielle et la science des données.
            Mon objectif est de résoudre des problèmes pratiques à travers des solutions technologiques innovantes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Avec une formation solide en mathématiques et en technologies de l'information, je m'efforce de combiner rigueur scientifique et créativité pour relever les défis complexes.
          </p>
        </div>
      </div>

      {/* Section Éducation */}
      <EducationSection />

      {/* Section Technologies */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Technologies maîtrisées</h2>
        <TechnologiesBanner />
      </div>
    </section>
  );
}

export default About;
