import React, { useContext, useState, useEffect } from 'react';
import { themes as colors } from './constants';

const Theme = React.createContext();
export const useTheme = () => ({ colors, ...useContext(Theme) });

export const withTheme = (Component) => (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const changeTheme = async () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <Theme.Provider value={{ theme, changeTheme }}>
      <Component {...props} />
    </Theme.Provider>
  );
};
