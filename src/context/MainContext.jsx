import React, { createContext, useState, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <MainContext.Provider value={{ currentPage, setCurrentPage }}>
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
