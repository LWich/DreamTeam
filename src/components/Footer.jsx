// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">🌟</span>
              DREAM TEAM
            </div>
            <p>
              Сервис для тех, кто строит не просто бизнес, а отношения, 
              на которых бизнес держится.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Продукт</h4>
              <a href="#how-it-works">Как работает</a>
              <a href="#for-whom">Для кого</a>
              <a href="#products">Тарифы</a>
            </div>
            <div className="link-group">
              <h4>Компания</h4>
              <a href="#method">О методе</a>
              <a href="#ethics">Этика</a>
              <a href="#contact">Контакты</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DREAM TEAM. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;