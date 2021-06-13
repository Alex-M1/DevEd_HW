import React, { useContext, useState } from 'react';

const Theme = React.createContext();
export const useTheme = () => useContext(Theme);

export const withTheme = (Component) => (props) => {
  const [theme, setTheme] = useState('light');
  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <Component {...props} />
    </Theme.Provider>
  );
};
