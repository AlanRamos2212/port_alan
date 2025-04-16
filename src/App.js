import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact"; // Si tienes una sección de Contacto
import "./styles/Navbar.css"; // Importa el CSS de la Navbar

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Aquí se incluye la Navbar */}
      <Routes>
        <Route path="/" element={<About />} /> {/* Página de inicio con About */}
        <Route path="/skills" element={<Skills />} /> {/* Página de Skills */}
        <Route path="/contact" element={<Contact />} /> {/* Página de Contact */}
        {/* Agrega más rutas si tienes más secciones */}
      </Routes>
    </Router>
  );
}
