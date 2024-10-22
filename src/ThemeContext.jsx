// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Создаем контекст для темы
const ThemeContext = createContext();

// Создаем провайдер для управления темой
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Состояние темы (по умолчанию светлая)

  // Функция для переключения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для доступа к контексту темы
export const useTheme = () => {
  return useContext(ThemeContext);
};
