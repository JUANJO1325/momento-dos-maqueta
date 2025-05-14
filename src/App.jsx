import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (credentials) => {
    console.log('Login con:', credentials);
    setIsAuthenticated(true);
  };

  const handleRegister = (userData) => {
    console.log('Registro con:', userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
        } />
        <Route path="/register" element={
          isAuthenticated ? <Navigate to="/" /> : <Register onRegister={handleRegister} />
        } />
        <Route path="/" element={
          isAuthenticated ? <Home /> : <Navigate to="/login" />
        } />
        <Route path="/services" element={
          isAuthenticated ? <Services /> : <Navigate to="/login" />
        } />
        <Route path="/contact" element={
          isAuthenticated ? <Contact /> : <Navigate to="/login" />
        } />
        <Route path="/about" element={
          isAuthenticated ? <About /> : <Navigate to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;