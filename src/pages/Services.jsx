import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './services.css';

const Services = () => {
  const services = [
    { id: 1, name: 'Plomería', price: '$50' },
    { id: 2, name: 'Electricidad', price: '$70' },
    { id: 3, name: 'Diseño Gráfico', price: '$100' }
  ];

  return (
    <div className="services-page">
      <Navbar />
      <main className="services-content">
        <h1>Servicios</h1>
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>Precio: {service.price}</p>
              <button className="quote-button">Solicitar cotización</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;