// components/Onboarding.js
import React, { useState } from 'react';

const Onboarding = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [teamData, setTeamData] = useState({
    teamName: '',
    nickname: '',
    members: [],
    testResults: null,
    birthDate: ''
  });

  const steps = [
    { number: 1, title: 'Создание команды', description: 'Давайте начнем с основ' },
    { number: 2, title: 'Личный тест', description: 'Пройдите быстрый тест' },
    { number: 3, title: 'Дата рождения', description: 'Для цифрового анализа' },
    { number: 4, title: 'Приглашение команды', description: 'Пригласите коллег' },
    { number: 5, title: 'Результаты', description: 'Первые инсайты' }
  ];

  const testQuestions = [
    {
      id: 1,
      question: "Когда нужно принять важное решение, я обычно:",
      options: [
        "Анализирую все факты и данные",
        "Прислушиваюсь к чувствам и отношениям",
        "Действую быстро и уверенно",
        "Ориентируюсь на практические последствия"
      ]
    },
    {
      id: 2,
      question: "В конфликтной ситуации я склонен:",
      options: [
        "Искать логическое решение",
        "Сохранять гармонию в отношениях",
        "Отстаивать свою позицию",
        "Искать практический компромисс"
      ]
    }
    // Добавьте больше вопросов...
  ];

  const handleTeamCreation = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleTestComplete = (results) => {
    setTeamData(prev => ({ ...prev, testResults: results }));
    setCurrentStep(3);
  };

  const handleBirthDateSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  const handleInviteMembers = () => {
    setCurrentStep(5);
  };

  const handleComplete = () => {
    const userData = {
      id: Date.now(),
      name: teamData.nickname,
      role: 'Лидер',
      team: teamData.teamName
    };
    
    const mockTeamData = {
      roles: [
        { name: 'Лидер', member: teamData.nickname, strength: 85 },
        { name: 'Организатор', member: null, strength: 45 },
        { name: 'Коммуникатор', member: null, strength: 60 }
      ],
      risks: [
        { type: 'Перегрузка', level: 'high', description: 'Лидер берет слишком много на себя' },
        { type: 'Коммуникация', level: 'medium', description: 'Недостаточная обратная связь' }
      ],
      compatibility: 72
    };

    onComplete(userData, mockTeamData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="onboarding-step">
            <h2>Создайте вашу команду</h2>
            <form onSubmit={handleTeamCreation}>
              <div className="form-group">
                <label className="form-label">Название команды</label>
                <input
                  type="text"
                  className="form-input"
                  value={teamData.teamName}
                  onChange={(e) => setTeamData(prev => ({ ...prev, teamName: e.target.value }))}
                  placeholder="Например: Стартап Альфа"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Ваш никнейм</label>
                <input
                  type="text"
                  className="form-input"
                  value={teamData.nickname}
                  onChange={(e) => setTeamData(prev => ({ ...prev, nickname: e.target.value }))}
                  placeholder="Как к вам обращаться?"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Продолжить
              </button>
            </form>
          </div>
        );

      case 2:
        return (
          <div className="onboarding-step">
            <h2>Личный тест (8-12 минут)</h2>
            <p>Ответьте на несколько вопросов, чтобы определить ваши сильные стороны</p>
            
            <div className="test-container">
              {testQuestions.map((question, index) => (
                <div key={question.id} className="test-question card">
                  <h3>Вопрос {index + 1}</h3>
                  <p>{question.question}</p>
                  <div className="test-options">
                    {question.options.map((option, optIndex) => (
                      <label key={optIndex} className="test-option">
                        <input type="radio" name={`question-${question.id}`} />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <button 
                className="btn btn-primary"
                onClick={() => handleTestComplete({ logic: 75, ethics: 60, will: 80, physics: 55 })}
              >
                Завершить тест
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="onboarding-step">
            <h2>Цифровой анализ</h2>
            <p>Введите дату рождения для матрицы Пифагора и анализа Александрова</p>
            
            <form onSubmit={handleBirthDateSubmit}>
              <div className="form-group">
                <label className="form-label">Дата рождения</label>
                <input
                  type="date"
                  className="form-input"
                  value={teamData.birthDate}
                  onChange={(e) => setTeamData(prev => ({ ...prev, birthDate: e.target.value }))}
                  required
                />
              </div>
              
              <div className="analysis-preview card">
                <h4>Предварительный анализ:</h4>
                <ul>
                  <li>💪 Сильная волевая функция</li>
                  <li>🧠 Развитая логика</li>
                  <li>❤️ Чувствительная этика</li>
                  <li>⚡ Высокая энергетика</li>
                </ul>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Продолжить
              </button>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="onboarding-step">
            <h2>Пригласите команду</h2>
            <p>Отправьте ссылку коллегам для участия в диагностике</p>
            
            <div className="invite-section card">
              <div className="invite-link">
                <input
                  type="text"
                  value="https://dreamteam.ru/invite/abc123"
                  readOnly
                  className="form-input"
                />
                <button 
                  className="btn btn-secondary"
                  onClick={() => navigator.clipboard.writeText("https://dreamteam.ru/invite/abc123")}
                >
                  Копировать
                </button>
              </div>
              
              <div className="invite-stats">
                <div className="stat">
                  <span className="stat-number">0</span>
                  <span className="stat-label">приглашено</span>
                </div>
                <div className="stat">
                  <span className="stat-number">0</span>
                  <span className="stat-label">присоединилось</span>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary" onClick={handleInviteMembers}>
              Продолжить без участников
            </button>
          </div>
        );

      case 5:
        return (
          <div className="onboarding-step">
            <h2>Ваши первые результаты!</h2>
            
            <div className="results-preview">
              <div className="personal-profile card">
                <h3>Ваш профиль</h3>
                <div className="role-badge badge badge-primary">Лидер-стратег</div>
                <div className="strengths">
                  <h4>Сильные стороны:</h4>
                  <ul>
                    <li>Стратегическое мышление</li>
                    <li>Принятие решений</li>
                    <li>Организация процессов</li>
                  </ul>
                </div>
                <div className="triggers">
                  <h4>Триггеры:</h4>
                  <ul>
                    <li>Неопределенность</li>
                    <li>Нарушение договоренностей</li>
                  </ul>
                </div>
              </div>
              
              <div className="compatibility-preview card">
                <h3>Совместимость в команде</h3>
                <div className="compatibility-score">
                  <span className="score">72%</span>
                  <span className="label">потенциальная эффективность</span>
                </div>
                <p>Для полной картины пригласите участников команды</p>
              </div>
            </div>
            
            <div className="upgrade-offer card pulse">
              <h3>📊 Получите полную карту команды</h3>
              <p>Обновитесь до тарифа Plus для доступа к:</p>
              <ul>
                <li>Полной карте ролей команды</li>
                <li>Анализу рисков и трений</li>
                <li>Персональным рекомендациям</li>
                <li>Совместимости пар</li>
              </ul>
              <button className="btn btn-primary">
                Обновить до Plus — 990 ₽
              </button>
            </div>
            
            <button className="btn btn-secondary" onClick={handleComplete}>
              Продолжить с бесплатным тарифом
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="onboarding">
      <div className="container">
        <div className="onboarding-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            <button className="btn btn-secondary" onClick={onBack}>Назад</button>
            <h1>Создание команды мечты</h1>
            <span style={{ width: '96px' }}></span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
          <div className="steps-indicator">
            {steps.map(step => (
              <div
                key={step.number}
                className={`step-indicator ${currentStep >= step.number ? 'active' : ''}`}
              >
                <span className="step-number">{step.number}</span>
                <span className="step-info">
                  <strong>{step.title}</strong>
                  <small>{step.description}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="onboarding-content">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;