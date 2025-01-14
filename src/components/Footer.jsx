// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; 2025 Yémalin Emile Morel KPAVODE. Tous droits réservés.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://linkedin.com/in/yemalin" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yemalin" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:yemalem03@gmail.com" className="hover:text-blue-400">Email</a>
      </div>
    </footer>
  );
}

export default Footer;