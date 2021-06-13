import React from 'react';
import { useTheme } from '../HOC/withTheme';

function Theme() {
  const { theme, setTheme } = useTheme();
  const handleChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <select onChange={handleChange} value={theme}>
      <option value="dark">dark</option>
      <option value="light">light</option>
    </select>
  );
}

export default Theme;
