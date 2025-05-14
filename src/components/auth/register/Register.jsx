import React, { useState } from 'react';
import './register.css';

const Register = ({ onRegister }) => {
  const [userData, setUserData] = useState({
    usuario: '',
    contraseña: '',
    nombre: '',
    correo: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(userData);
  };

  return (
    <div className="register-page">
      <h1>A Web Page</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={userData.usuario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={userData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={userData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
      <p className="login-link">¿Ya tiene una cuenta? <a href="/login">Inicie sesión aquí</a></p>
    </div>
  );
};

export default Register;