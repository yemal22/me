// src/components/EducationSection.jsx
import React from 'react';
import { educations } from '../data/educations';

function EducationSection() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Éducation</h2>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;