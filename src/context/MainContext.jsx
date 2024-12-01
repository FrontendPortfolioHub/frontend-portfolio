import React, { useState, useMemo } from 'react';

export const MainContext = React.createContext({
  isStarted: false,
  setIsStarted: () => {},
});

export const MainProvider = ({ children }) => {
  const [isStarted, setIsStarted] = useState(false);

  const value = useMemo(
    () => ({
      isStarted,
      setIsStarted,
    }),
    [isStarted],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
