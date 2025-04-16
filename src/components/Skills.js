// src/components/Skills.js

import React from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa"; // Importando los iconos

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
        </div>
    </div>
    </section>
);
}
