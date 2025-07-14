import React, { createContext, useContext, useState, ReactNode } from 'react';
import theme from '../lib/theme';

interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode, isLoading, setIsLoading }}>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
