// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1️⃣',
      title: 'Тест',
      description: 'Простые вопросы (8-12 минут), чтобы определить ведущие функции: логика, этика, воля, физика.'
    },
    {
      number: '2️⃣',
      title: 'Дата рождения',
      description: 'Цифровая матрица Пифагора и анализ Александрова показывают энергетику и дисциплину.'
    },
    {
      number: '3️⃣',
      title: 'Карта ролей',
      description: 'AI объединяет данные и показывает: кто лидер, кто организатор, кто коммуникатор.'
    },
    {
      number: '4️⃣',
      title: 'Риски и трения',
      description: 'Подсветка конфликтных пар и зон напряжения.'
    },
    {
      number: '5️⃣',
      title: 'Рекомендации',
      description: 'Конкретные советы «как с ним работать» и «что бережно избегать».'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">
          Как за 10 минут увидеть, почему команда буксует — и что с этим делать
        </h2>
        <p className="section-subtitle">
          Мы соединяем психологию и цифровой анализ, чтобы объяснить, как ваши люди работают 
          и где вы теряете доверие. Без сложных терминов, в ясных шагах.
        </p>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card card fade-in-up">
              <h3 className="step-title">{step.number} {step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;