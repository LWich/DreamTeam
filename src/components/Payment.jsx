// components/Payment.js
import React, { useState } from 'react';
import Header from './Header';

const Payment = ({ onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState('plus');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const plans = {
    plus: {
      name: 'Plus',
      title: 'Team Map',
      price: 990,
      period: 'месяц',
      description: 'Для растущих команд',
      features: [
        'Полная карта команды',
        'Анализ рисков и трений',
        'Персональные рекомендации',
        'Совместимость пар',
        'До 10 участников',
        'Приоритетная поддержка'
      ]
    },
    pro: {
      name: 'Pro',
      title: 'Founder Conflict Diagnostics',
      price: 4990,
      period: 'месяц',
      description: 'Для партнеров-фаундеров',
      features: [
        'Все возможности Plus',
        'Глубокая диагностика фаундеров',
        'Сценарий фасилитации',
        'Анализ зон власти',
        'Персональный отчёт',
        'До 5 фаундеров',
        'Премиум поддержка 24/7'
      ]
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    // Интеграция с Stripe/ЮKassa
    alert('Перенаправление на страницу оплаты...');
  };

  return (
    <div className="payment-page">
      <Header onLogin={onBack} />
      
      <div className="container">
        <div className="payment-header">
          <button className="btn btn-ghost" onClick={onBack}>
            ← Назад
          </button>
          <h1>Обновление тарифа</h1>
          <p>Выберите подходящий план для вашей команды</p>
        </div>

        <div className="payment-content">
          <div className="plans-selection">
            <h2>Доступные тарифы</h2>
            
            <div className="plans-grid grid grid-2">
              {Object.entries(plans).map(([key, plan]) => (
                <div
                  key={key}
                  className={`plan-card card ${selectedPlan === key ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(key)}
                >
                  {selectedPlan === key && (
                    <div className="selected-badge">Выбран</div>
                  )}
                  
                  <h3>{plan.name}</h3>
                  <h4>{plan.title}</h4>
                  
                  <div className="plan-price">
                    <span className="amount">{plan.price} ₽</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  
                  <p className="plan-description">{plan.description}</p>
                  
                  <ul className="plan-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`btn ${selectedPlan === key ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    {selectedPlan === key ? 'Выбран' : 'Выбрать'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="payment-section">
            <h2>Способ оплаты</h2>
            
            <form onSubmit={handlePayment} className="payment-form card">
              <div className="payment-methods">
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>💳 Банковская карта</span>
                </label>
                
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="yoomoney"
                    checked={paymentMethod === 'yoomoney'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>👛 ЮMoney</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details">
                  <div className="form-group">
                    <label className="form-label">Номер карты</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>
                  
                  <div className="form-row grid grid-2">
                    <div className="form-group">
                      <label className="form-label">Срок действия</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="ММ/ГГ"
                        maxLength="5"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">CVV</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123"
                        maxLength="3"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Имя владельца</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="IVAN IVANOV"
                    />
                  </div>
                </div>
              )}

              <div className="payment-summary card">
                <h4>Итого к оплате:</h4>
                <div className="summary-row">
                  <span>Тариф {plans[selectedPlan].name}</span>
                  <span>{plans[selectedPlan].price} ₽</span>
                </div>
                <div className="summary-row">
                  <span>НДС</span>
                  <span>Включен</span>
                </div>
                <div className="summary-total">
                  <span>Всего</span>
                  <span className="total-amount">{plans[selectedPlan].price} ₽</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                💳 Оплатить {plans[selectedPlan].price} ₽
              </button>
              
              <p className="payment-note">
                Нажимая кнопку, вы соглашаетесь с условиями оферты и политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;