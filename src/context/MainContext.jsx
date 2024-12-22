import React, { createContext, useState, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang) => setLanguage(lang);

  return (
    <MainContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
};
