import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-content">
        <h1>Contacto</h1>
        <div className="contact-info">
          <p>Email: servicios@ecobox.com</p>
          <p>Teléfono: +57 3206902440</p>
          <p>Dirección: Calle 48 C Norte 24#42</p>
        </div>
      </main>
    </div>
  );
};

export default Contact;