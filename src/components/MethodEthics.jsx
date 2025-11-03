// components/MethodEthics.js
import React from 'react';

const MethodEthics = () => {
  const disciplines = [
    {
      name: 'Психософия Афанасьева',
      description: 'Структура поведения'
    },
    {
      name: 'Таблица Пифагора',
      description: 'Природные ресурсы'
    },
    {
      name: 'Цифровой анализ Александрова',
      description: 'Вектор развития'
    }
  ];

  const ethics = [
    'Данные обезличены',
    'Дата не хранится явно',
    'AI не оценивает, а объясняет',
    'В спорных случаях — вывод "гибридная роль / уточнение"'
  ];

  return (
    <section id="method" className="method-ethics">
      <div className="container">
        <h2 className="section-title">Почему DREAM TEAM — инструмент доверия, а не контроля</h2>
        
        <div className="method-content">
          <div className="disciplines">
            <h3>Метод LifeFusion™ — объединение трёх дисциплин:</h3>
            <div className="disciplines-list">
              {disciplines.map((discipline, index) => (
                <div key={index} className="discipline-item">
                  <strong>• {discipline.name}</strong> — {discipline.description}
                </div>
              ))}
            </div>
            <p>
              AI-коуч переводит всё это в понятный язык управления.
            </p>
          </div>
          
          <div className="ethics">
            <h3>Этика:</h3>
            <ul>
              {ethics.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="ethics-conclusion">
              Мы создаём инструмент для разговора, а не манипуляции.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodEthics;