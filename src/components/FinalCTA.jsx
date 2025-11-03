// components/FinalCTA.js
import React from 'react';

const FinalCTA = ({ onStartOnboarding }) => {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-content">
          <h2>Построй команду, которой можно доверять</h2>
          <p>
            Без борьбы за власть. Без скрытых обид. Без ощущения, что ты один тянешь проект. 
            10 минут — и ты увидишь, где команда теряет энергию.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={onStartOnboarding}>
              Запустить диагностику команды
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;