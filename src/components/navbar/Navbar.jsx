import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Servicios</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
          <Link to="/about" className="nav-link">Acerca de</Link>
        </div>
        <button onClick={onLogout} className="logout-button">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;