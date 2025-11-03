// components/PersonalCabinet.js
import React, { useState } from 'react';
import Header from './Header';

const PersonalCabinet = ({ user, teamData, onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Мой профиль', icon: '👤' },
    { id: 'team', label: 'Карта команды', icon: '🧭' },
    { id: 'recommendations', label: 'Рекомендации', icon: '💡' },
    { id: 'payment', label: 'Тарифы', icon: '💎' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="tab-content">
            <div className="profile-header">
              <div className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="profile-info">
                <h2>{user.name}</h2>
                <p>Команда: {user.team}</p>
                <div className="role-badge badge badge-primary">Лидер-стратег</div>
              </div>
            </div>

            <div className="profile-sections grid grid-2">
              <div className="card">
                <h3>🎯 Сильные стороны</h3>
                <ul>
                  <li>Стратегическое мышление (85%)</li>
                  <li>Принятие решений (80%)</li>
                  <li>Организация процессов (75%)</li>
                  <li>Лидерство (82%)</li>
                </ul>
              </div>

              <div className="card">
                <h3>⚡ Триггеры</h3>
                <ul>
                  <li>Неопределенность и хаос</li>
                  <li>Нарушение договоренностей</li>
                  <li>Микро-менеджмент</li>
                </ul>
              </div>

              <div className="card">
                <h3>💼 Рекомендуемые роли</h3>
                <ul>
                  <li><strong>Стратег</strong> — разработка направлений</li>
                  <li><strong>Архитектор</strong> — построение систем</li>
                  <li><strong>Лидер</strong> — ведение команды</li>
                </ul>
              </div>

              <div className="card">
                <h3>📈 Зоны роста</h3>
                <ul>
                  <li>Развитие эмоционального интеллекта</li>
                  <li>Делегирование задач</li>
                  <li>Обратная связь команде</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="tab-content">
            <div className="team-header">
              <h2>Карта команды {user.team}</h2>
              <div className="team-stats">
                <div className="stat-card card">
                  <span className="stat-value">{teamData?.compatibility || 72}%</span>
                  <span className="stat-label">Совместимость</span>
                </div>
                <div className="stat-card card">
                  <span className="stat-value">{teamData?.risks?.length || 2}</span>
                  <span className="stat-label">Зоны риска</span>
                </div>
                <div className="stat-card card">
                  <span className="stat-value">{teamData?.roles?.filter(r => r.member).length || 1}</span>
                  <span className="stat-label">Участников</span>
                </div>
              </div>
            </div>

            <div className="team-map">
              <h3>Роли в команде</h3>
              <div className="roles-grid grid grid-3">
                {(teamData?.roles || []).map((role, index) => (
                  <div key={index} className="role-card card">
                    <h4>{role.name}</h4>
                    <div className="role-strength">
                      <div className="strength-bar">
                        <div 
                          className="strength-fill"
                          style={{ width: `${role.strength}%` }}
                        ></div>
                      </div>
                      <span>{role.strength}%</span>
                    </div>
                    <p className="role-member">
                      {role.member || 'Требуется участник'}
                    </p>
                    {!role.member && (
                      <button className="btn btn-secondary btn-small">
                        Пригласить
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="risks-section">
              <h3>🔍 Зоны риска</h3>
              <div className="risks-grid">
                {(teamData?.risks || []).map((risk, index) => (
                  <div key={index} className={`risk-card card ${risk.level}`}>
                    <div className="risk-header">
                      <h4>{risk.type}</h4>
                      <span className={`badge ${risk.level === 'high' ? 'badge-warning' : 'badge-primary'}`}>
                        {risk.level === 'high' ? 'Высокий' : 'Средний'} риск
                      </span>
                    </div>
                    <p>{risk.description}</p>
                    <div className="risk-actions">
                      <button className="btn btn-ghost btn-small">
                        Рекомендации
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'recommendations':
        return (
          <div className="tab-content">
            <h2>Персональные рекомендации</h2>
            
            <div className="recommendations-grid grid grid-2">
              <div className="card">
                <h3>🤝 Взаимодействие с командой</h3>
                <ul>
                  <li>Проводите еженедельные check-in встречи</li>
                  <li>Используйте "я-сообщения" в обратной связи</li>
                  <li>Четко формулируйте ожидания от задач</li>
                </ul>
              </div>

              <div className="card">
                <h3>🚀 Развитие лидерства</h3>
                <ul>
                  <li>Практикуйте активное слушание</li>
                  <li>Делегируйте не только задачи, но и ответственность</li>
                  <li>Создавайте пространство для инициативы команды</li>
                </ul>
              </div>

              <div className="card">
                <h3>⚖️ Баланс нагрузки</h3>
                <ul>
                  <li>Отслеживайте признаки выгорания</li>
                  <li>Планируйте время для стратегического мышления</li>
                  <li>Устанавливайте четкие границы работы/отдыха</li>
                </ul>
              </div>

              <div className="card">
                <h3>📊 Оптимизация процессов</h3>
                <ul>
                  <li>Внедрите систему приоритизации задач</li>
                  <li>Создайте регламент принятия решений</li>
                  <li>Определите зоны ответственности каждого</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="tab-content">
            <h2>Управление тарифом</h2>
            
            <div className="current-plan card">
              <h3>Текущий тариф: Free</h3>
              <p>Базовые возможности с ограничением до 3 участников</p>
              
              <div className="plan-features">
                <h4>Доступно:</h4>
                <ul>
                  <li>✓ Личный профиль</li>
                  <li>✓ Базовая совместимость</li>
                  <li>✓ До 3 участников</li>
                </ul>
                
                <h4>Недоступно:</h4>
                <ul>
                  <li>✗ Полная карта команды</li>
                  <li>✗ Анализ рисков</li>
                  <li>✗ Персональные рекомендации</li>
                  <li>✗ Приоритетная поддержка</li>
                </ul>
              </div>
              
              <button 
                className="btn btn-primary"
                onClick={onNavigate}
              >
                Обновить тариф
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="personal-cabinet">
      <Header onLogin={() => setActiveTab('profile')} />
      
      <div className="container">
        <div className="cabinet-layout">
          <aside className="sidebar">
            <div className="user-card card">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.team}</p>
              </div>
            </div>

            <nav className="sidebar-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="nav-icon">{tab.icon}</span>
                  <span className="nav-label">{tab.label}</span>
                </button>
              ))}
            </nav>

            <div className="sidebar-footer">
              <button className="btn btn-ghost" onClick={onLogout}>
                Выйти
              </button>
            </div>
          </aside>

          <main className="cabinet-main">
            {renderTabContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinet;