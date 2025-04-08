import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isLoggedIn, logoutUser } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-text">EduTech</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          {isLoggedIn && <Link to="/service" className="nav-link">Services</Link>}
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className={`auth-buttons ${isMenuOpen ? 'active' : ''}`}>
          {isLoggedIn ? (
            <div className="user-menu">
              <button className="user-btn" onClick={toggleUserMenu}>
                <span className="user-icon">👤</span>
              </button>
              <div className={`dropdown-menu ${isUserMenuOpen ? 'active' : ''}`}>
                <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <button onClick={handleLogout} className="dropdown-item">Logout</button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 