import React from 'react';

const tariffs = [
  { id: 1, name: 'Beginner', description: 'Базовый тариф', price: '1000 ₽/мес', current: false },
  { id: 2, name: 'Pro', description: 'Продвинутый тариф', price: '3000 ₽/мес', current: true },
  { id: 3, name: 'Enterprise', description: 'Корпоративный тариф', price: '10,000 ₽/мес', current: false },
];

const TariffsPage = () => {
  return (
    <div>
      <h1>Наши тарифы</h1>
      <div className="tariffs">
        {tariffs.map((tariff) => (
          <div 
            key={tariff.id} 
            className={`tariff-card ${tariff.current ? 'current' : ''}`}
          >
            <h2>{tariff.name}</h2>
            <p>{tariff.description}</p>
            <p>{tariff.price}</p>
            <button>
              {tariff.current ? 'Перейти в личный кабинет' : 'Подробнее'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TariffsPage;
