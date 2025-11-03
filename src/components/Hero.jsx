// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = ({ onStartOnboarding }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Команда, как семья</h1>
          <p className="hero-subtitle">
            Доверие — это скорость. DREAM TEAM помогает понять, кто рядом с тобой в команде, 
            на какой роли человек будет эффективен и как избежать ненужных конфликтов.
          </p>
          <p className="hero-note">
            Без психологических ярлыков. Только честная картина взаимодействия — за 10 минут.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onStartOnboarding}>
              Проверить мою команду
            </button>
            <button className="btn btn-secondary">
              Посмотреть пример отчёта
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="network-visual">
            <div className="node node-main">👑</div>
            <div className="node node-1">💼</div>
            <div className="node node-2">💬</div>
            <div className="node node-3">🔧</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;