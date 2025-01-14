// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contactez-moi</h1>
      <p>Je serais ravi d'échanger avec vous ! N'hésitez pas à me contacter via :</p>
      <ul className="list-disc pl-5 mt-4">
        <li>Email : <a href="mailto:yemalem03@gmail.com" className="text-blue-600 hover:underline">yemalem03@gmail.com</a></li>
        <li>Téléphone : <a href="tel:+22995754157" className="text-blue-600 hover:underline">+229 95 75 41 57</a></li>
        <li>LinkedIn : <a href="https://linkedin.com/in/yemalin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yemalin</a></li>
        <li>GitHub : <a href="https://github.com/yemalin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/yemalin</a></li>
      </ul>
    </section>
  );
}

export default Contact;
