import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const projects = [
  {
    name: "Calistenic Web",
    description: "Sitio web de calistenia.",
    url: "https://calistenic-web.onrender.com/",
  },
];

export default function Projects() {
  return (
    <main className="projects-section">
      <div className="projects-container">
        <p className="projects-eyebrow">PORTAFOLIO</p>
        <h1 className="projects-title">Proyectos</h1>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Ver proyecto <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}