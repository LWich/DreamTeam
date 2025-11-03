// components/ForWhom.js
import React from 'react';

const ForWhom = () => {
  const scenarios = [
    {
      title: 'Стартап с друзьями',
      description: 'Покажем, кто за что отвечает, чтобы не потерять дружбу.'
    },
    {
      title: 'Удалённая команда',
      description: 'Увидишь, кто выгорает и кого перегружают.'
    },
    {
      title: 'Предприниматель без HR',
      description: 'Получишь карту ролей и фразы для общения.'
    },
    {
      title: 'Партнёры-фаундеры',
      description: 'Поймёшь, где конфликт за контроль и как его снять.'
    },
    {
      title: 'Проектная работа',
      description: 'Соберёшь команду под задачу без ссор.'
    }
  ];

  return (
    <section id="for-whom" className="for-whom">
      <div className="container">
        <h2 className="section-title">Если узнаёшь себя — тебе пора в DREAM TEAM</h2>
        
        <div className="scenarios-grid grid grid-2">
          {scenarios.map((scenario, index) => (
            <div key={index} className="scenario-card card fade-in-up">
              <h3>{scenario.title}</h3>
              <p>{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;