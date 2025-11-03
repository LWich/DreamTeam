// components/LivingTeam.js
import React from 'react';

const LivingTeam = () => {
  const principles = [
    {
      title: 'Прозрачные роли',
      description: 'Каждый знает свою зону силы.'
    },
    {
      title: 'Без скрытой войны',
      description: 'Лидеры не борются, а ведут вместе.'
    },
    {
      title: 'Уважение к ресурсу',
      description: 'Каждый в своей роли.'
    },
    {
      title: 'Обратная связь без разрушения',
      description: 'Честно, без ярлыков.'
    }
  ];

  return (
    <section className="living-team">
      <div className="container">
        <h2 className="section-title">Как выглядит команда, которой можно доверять</h2>
        
        <div className="principles-grid grid grid-4">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card card fade-in-up">
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivingTeam;