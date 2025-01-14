// src/components/ProjectSection.jsx
import React from 'react';

function ProjectSection({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="border p-4 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Voir le projet
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;
