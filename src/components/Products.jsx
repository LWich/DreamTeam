// components/Products.js
import React from 'react';

const Products = ({ onStartOnboarding }) => {
  const products = [
    {
      name: 'Free',
      title: 'Team Profile',
      price: 'Бесплатно',
      description: 'Базовый портрет до 3 человек',
      features: ['Личный профиль', 'Первые сигналы совместимости', 'Базовые рекомендации']
    },
    {
      name: 'Plus',
      title: 'Team Map',
      price: 'от 990 ₽',
      description: 'Карта ролей и рисков, рекомендации и связи',
      features: ['Полная карта команды', 'Анализ рисков', 'Персональные рекомендации', 'Совместимость пар'],
      popular: true
    },
    {
      name: 'Pro',
      title: 'Founder Conflict Diagnostics',
      price: 'от 4 990 ₽',
      description: 'Диагностика фаундеров, зоны власти и фасилитация',
      features: ['Глубокая диагностика', 'Сценарий фасилитации', 'Анализ зон власти', 'Персональный отчёт']
    },
    {
      name: 'Enterprise',
      title: 'Corporate Mirror',
      price: 'по запросу',
      description: 'SaaS и API для крупных команд',
      features: ['SaaS-решение', 'API интеграция', 'Приоритетная поддержка', 'Кастомные отчёты']
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Выберите формат — от первого знакомства до глубокой диагностики</h2>
        
        <div className="products-grid grid grid-4">
          {products.map((product, index) => (
            <div key={index} className={`product-card card ${product.popular ? 'popular' : ''}`}>
              {product.popular && <div className="popular-badge">Популярный</div>}
              <h3 className="product-name">{product.name}</h3>
              <h4 className="product-title">{product.title}</h4>
              <div className="product-price">{product.price}</div>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={onStartOnboarding}>
                Выбрать
              </button>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <button className="btn btn-primary" onClick={onStartOnboarding}>
            Запустить диагностику своей команды
          </button>
          <p className="microtext">Каждая команда заслуживает ясности.</p>
        </div>
      </div>
    </section>
  );
};

export default Products;