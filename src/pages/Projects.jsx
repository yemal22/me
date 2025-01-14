// src/pages/Projects.jsx
import React from 'react';
import { projects } from '../data/projects';
import ProjectSection from '../components/ProjectSection';

function Projects() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mes Projets</h1>
      <ProjectSection projects={projects} />
    </section>
  );
}

export default Projects;
