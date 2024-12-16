import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/account/login', { login, password });
      const { accessToken, expire } = response.data;

      // Сохраняем токен в localStorage
      localStorage.setItem('token', accessToken);

      // Передаем данные пользователя в App
      onLogin({ name: login });

      setError('');
    } catch (err) {
      setError('Ошибка авторизации. Проверьте данные.');
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Логин" 
          value={login} 
          onChange={(e) => setLogin(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" disabled={!login || !password}>
          Войти
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
