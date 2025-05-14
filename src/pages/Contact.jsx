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
          <p>Email: contacto@serviciolocal.com</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Dirección: Calle Principal #123, Ciudad</p>
        </div>
      </main>
    </div>
  );
};

export default Contact;