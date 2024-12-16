import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import Header from './components/Header';
import TariffsPage from './pages/TariffsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <div>
      <Header 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={handleLogout} 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tariffs" element={<TariffsPage />} />  {/* Добавили этот маршрут */}
      </Routes>
    </div>
  );
}

export default App;
