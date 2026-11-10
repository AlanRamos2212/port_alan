// src/components/Skills.js

import React from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaDatabase } from "react-icons/fa"; // Importando los iconos
import { SiAngular, SiFlutter, SiPostgresql, SiSpringboot, SiTypescript } from "react-icons/si";

import "../styles/Skills.css"; // Import the CSS file for styling

export default function Skills() {
return (
    <section id="skills" className="skills-section">
    <div className="skills-container">
        <h2 className="skills-title">Habilidades</h2>
        <div className="skills-list">
        <div className="skill-card js">
            <FaJs className="skill-icon" />
            <h3>JavaScript</h3>
        </div>
        <div className="skill-card react">
            <FaReact className="skill-icon" />
            <h3>React</h3>
        </div>
        <div className="skill-card node">
            <FaNodeJs className="skill-icon" />
            <h3>Node.js</h3>
        </div>
        <div className="skill-card html">
            <FaHtml5 className="skill-icon" />
            <h3>HTML & CSS</h3>
        </div>
        <div className="skill-card mysql">
            <FaDatabase className="skill-icon" />
            <h3>MySQL</h3>
        </div>
        <div className="skill-card angular">
            <SiAngular className="skill-icon" />
            <h3>Angular</h3>
        </div>
        <div className="skill-card spring-boot">
            <SiSpringboot className="skill-icon" />
            <h3>Spring Boot</h3>
        </div>
        <div className="skill-card typescript">
            <SiTypescript className="skill-icon" />
            <h3>TypeScript</h3>
        </div>
        <div className="skill-card flutter">
            <SiFlutter className="skill-icon" />
            <h3>Flutter</h3>
        </div>
        <div className="skill-card postgresql">
            <SiPostgresql className="skill-icon" />
            <h3>PostgreSQL</h3>
        </div>
        </div>
    </div>
    </section>
);
}
