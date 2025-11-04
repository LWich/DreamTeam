// components/Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = ({ onLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">🌟</span>
            DREAM TEAM
          </div>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>Как работает</a>
            <a href="#for-whom" onClick={() => setIsMobileMenuOpen(false)}>Для кого</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Тарифы</a>
            <a href="#method" onClick={() => setIsMobileMenuOpen(false)}>О методе</a>
            
            <button className="btn btn-start-diagnosis" onClick={onLogin}>
              Начать диагностику
            </button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;