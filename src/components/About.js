import React, { useEffect } from "react";
import "../styles/About.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200);
        });
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text-container fade-in">
                    <h1 className="about-title">Hola, soy Alan</h1>
                    <p className="about-subtitle">
                        Me encanta construir aplicaciones web funcionales y atractivas.
                        <br className="hide-on-small" />
                        Estudio desarrollo de software y disfruto aprender tecnologías nuevas
                        para resolver problemas reales con código.
                    </p>
                    <p className="about-text">
                        Tengo experiencia en proyectos académicos y personales con React,
                        bases de datos, APIs y diseño de interfaces. Me gusta colaborar,
                        aprender y seguir creciendo como desarrollador.
                    </p>
                    <div className="social-links">
                        <h3 className="social-title">Sígueme</h3>
                        <ul className="social-list">
                            <li><a href="https://github.com/AlanRamos2212" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a></li>
                            <li><a href="https://linkedin.com/in/alan-ramos-12710a358" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
                            <li><a href="https://www.instagram.com/_alan.ramos_/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a></li>
                        </ul>
                    </div>
                    <div className="cta-button">
                        <a href="cv.pdf" download className="cta-link">
                            Descargar CV
                        </a>
                    </div>
                </div>
                <div className="about-image-container fade-in">
                    <img src="yo.jpg" alt="Imagen de Alan" className="about-image" />
                </div>
            </div>
        </section>
    );
}
