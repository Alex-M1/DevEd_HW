import React from 'react';
import { useTheme } from '../../helpers/withTheme';

function ThemeSelect() {
  const { theme, changeTheme } = useTheme();
  return (
    <select value={theme} onChange={changeTheme}>
      <option value='dark'>dark</option>
      <option value='light'>light</option>
    </select>
  );
}

export default ThemeSelect;
