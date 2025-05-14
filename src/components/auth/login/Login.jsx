import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    usuario: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="login-page">
        <div className="main-page-login">
      <h1>EcoBox</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={credentials.usuario}
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
            value={credentials.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
      <p className="register-link">¿No tiene una cuenta? <a href="/register">Regístrese aquí</a></p>
    </div>
    </div>
  );
};

export default Login;