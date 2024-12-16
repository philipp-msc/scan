import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Добро пожаловать в сервис поиска публикаций!</h1>
        <p>Наш сервис позволяет находить публикации о вашей компании по ИНН в разных источниках. Мы обеспечиваем быстрый и удобный поиск с использованием различных фильтров для точных результатов.</p>
      </header>
      
      <section className="why-us">
        <h2>Почему именно мы?</h2>
        <div className="carousel">
          <div className="carousel-item">
            <h3>Надежность</h3>
            <p>Наш сервис предоставляет точные и актуальные данные.</p>
          </div>
          <div className="carousel-item">
            <h3>Удобство</h3>
            <p>Простой интерфейс, доступный на всех устройствах.</p>
          </div>
          <div className="carousel-item">
            <h3>Безопасность</h3>
            <p>Мы гарантируем защиту ваших данных и конфиденциальность.</p>
          </div>
        </div>
      </section>

      <section className="tariffs">
        <h2>Наши тарифы</h2>
        <p>Выберите тариф, который подходит именно вам. Мы предлагаем различные варианты для каждого бизнеса.</p>
      </section>
    </div>
  );
}

export default HomePage;
