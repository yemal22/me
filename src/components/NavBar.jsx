// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-extrabold font-sans">
          <Link to="/">Morel KPAVODE</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-medium text-lg font-serif">
          <li className="hover:text-gray-300 transition">
            <Link to="/">Accueil</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link to="/projects">Projets</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link to="/certifications">Certifications</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link to="/about">À propos</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;