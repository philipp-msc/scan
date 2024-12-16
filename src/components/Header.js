import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = ({ isAuthenticated, user, onLogout }) => {
  const [limits, setLimits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      axios.get('/account/limits', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then((response) => {
          setLimits(response.data);
        })
        .catch((error) => {
          console.error('Ошибка загрузки лимитов:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isAuthenticated]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">СКАН</Link>
      </div>
      <nav className="menu">
        <Link to="/">Главная</Link>
        <Link to="/tariffs">Тарифы</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <div className="user-panel">
        {!isAuthenticated ? (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Зарегистрироваться</Link>
          </>
        ) : (
          <div className="account-info">
            {loading ? (
              <div>Загрузка...</div>
            ) : (
              <div className="limits">
                <span>Использовано: {limits.used} из {limits.total}</span>
              </div>
            )}
            <span>{user.name}</span>
            <button onClick={onLogout}>Выйти</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
