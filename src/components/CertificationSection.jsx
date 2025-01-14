// src/components/CertificationSection.jsx
import React from 'react';

function CertificationSection({ certifications }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert) => (
        <div key={cert.id} className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-32 h-32 object-cover mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold text-center">{cert.title}</h2>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            Voir la certification
          </a>
        </div>
      ))}
    </div>
  );
}

export default CertificationSection;
