import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../components/navbar/navbar.css';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-content">
        <h1>Acerca de</h1>
        <div className="about-text">
          <p>Somos una empresa local comprometida con brindar servicios de calidad a nuestra comunidad.</p>
          <p>Fundada en 2020, hemos crecido gracias a la confianza de nuestros clientes.</p>
        </div>
      </main>
    </div>
  );
};

export default About;