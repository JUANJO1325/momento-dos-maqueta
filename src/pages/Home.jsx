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
          <h2>Bienvenido a nuestro servicio local de Ecobox</h2>
          <p>Ofrecemos soluciones profesionales para tus necesidades diarias</p>
          <p class="text-size">En EcoBox creemos que cada empaque puede marcar la diferencia. Somos una empresa dedicada a ofrecer soluciones de empaques sostenibles, funcionales y con diseño personalizado para marcas conscientes del impacto ambiental.

Nuestro propósito es reemplazar el empaque contaminante por alternativas biodegradables, compostables y reciclables sin sacrificar la estética ni la funcionalidad. Desde bolsas y cajas hasta etiquetas y papel envolvente, todo lo que hacemos está pensado para cuidar el planeta y potenciar la identidad de cada marca.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;