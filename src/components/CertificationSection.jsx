// src/components/CertificationsSection.jsx
import React from 'react';
import { certifications } from '../data/certifications';

function CertificationsSection() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="border rounded shadow-md overflow-hidden">
            {/* Certification Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />

            {/* Certification Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Statut : <span className="font-bold">{cert.status}</span>
              </p>
              {cert.isProfessional && (
                <p className="text-sm text-green-600 font-bold">Certification Professionnelle</p>
              )}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 hover:underline"
              >
                Voir la certification
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;