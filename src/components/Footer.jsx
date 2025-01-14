// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-2">
          <a
            href="https://linkedin.com/in/morel-kpavode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition hover:text-blue-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://github.com/yemal22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition hover:text-blue-300"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a
            href="mailto:yemalem03@gmail.com"
            className="hover:scale-110 transform transition hover:text-blue-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              className="w-6 h-6"
            />
          </a>
        </div>
        <p className="text-xs text-gray-200 font-light">&copy; 2025 Yémalin Emile Morel KPAVODE - Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
