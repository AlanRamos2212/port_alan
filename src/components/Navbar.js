import React from "react";
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom para navegar sin recargar
import "../styles/Navbar.css"; // Importa el CSS de la Navbar

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link> {/* Redirige a la sección "About" */}
        </li>
        <li>
          <Link to="/skills">Habilidades</Link> {/* Redirige a la sección "Skills" */}
        </li>
        <li>
          <Link to="/contact">Contacto</Link> {/* Redirige a la sección "Contact" */}
        </li>
      </ul>
    </nav>
  );
}
