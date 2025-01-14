// src/pages/Certifications.jsx
import React from 'react';
import { certifications } from '../data/certifications';
import CertificationSection from '../components/CertificationSection';

function Certifications() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Certifications</h1>
      <CertificationSection certifications={certifications} />
    </section>
  );
}

export default Certifications;
