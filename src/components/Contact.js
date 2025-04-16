import React from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import "../styles/Contact.css";

export default function Contact() {
const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_i4cy8oa",       // ← Reemplaza con tu Service ID real
        "template_eexrss9",      // ← Reemplaza con tu Template ID real
        e.target,
        "yRkLxvCgM6QHk2ulB"      // ← Reemplaza con tu Public Key real
    )
    .then(
        (result) => {
        console.log(result.text);
        alert("Mensaje enviado correctamente. ¡Gracias por contactarme!");
        e.target.reset();
        },
        (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar tu mensaje.");
        }
    );
};

return (
    <section id="contact" className="contact-section">
    <h2>Contáctame</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
        <input
        type="text"
        name="from_name"
        placeholder="Tu nombre"
        required
        />
        <input
        type="email"
        name="from_email"
        placeholder="Tu correo"
        required
        />
        <textarea
        name="message"
        placeholder="Tu mensaje"
        rows="5"
        required
        ></textarea>
        <button type="submit" className="send-button">
        Enviar mensaje <FaPaperPlane style={{ marginLeft: "8px" }} />
        </button>
    </form>
    </section>
);
}
