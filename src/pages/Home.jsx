import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-content">
        <h1>Home</h1>
        <section className="welcome-section">
          <h2>Bienvenido a nuestro servicio local</h2>
          <p>Ofrecemos soluciones profesionales para tus necesidades diarias</p>
        </section>
      </main>
    </div>
  );
};

export default Home;