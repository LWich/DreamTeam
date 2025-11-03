// components/WhyImportant.js
import React from 'react';
import './WhyImportant.css';

const WhyImportant = () => {
  return (
    <section className="why-important">
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="section-title">Доверие — не про мягкость. Это про скорость.</h2>
            <p>
              Большинство команд рушатся не из-за идей, а из-за недоверия. Один тащит всё и выгорает, 
              двое борются за лидерство, остальные теряют фокус. DREAM TEAM помогает увидеть трещины 
              заранее — кто перегружен, где нет границ, что стоит проговорить.
            </p>
            <div className="thesis">
              <strong>Когда роли ясны — команда движется быстрее, а лидер может дышать.</strong>
            </div>
          </div>
          <div className="content-visual">
            <div className="visual-placeholder">
              {/* График или диаграмма скорости команды */}
              <div className="speed-chart">
                <div className="speed-bar low"></div>
                <div className="speed-bar medium"></div>
                <div className="speed-bar high"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;