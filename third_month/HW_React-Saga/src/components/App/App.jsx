import React from 'react';
import { useTheme } from '../../helpers/withTheme';
import Header from '../Header';
import Persons from '../Persons';
import { GlobalStyle } from './styles';

function App() {
  const { colors, theme } = useTheme();
  return (
    <div>
      <Header />
      <Persons />
      <GlobalStyle
        colors={colors}
        theme={theme}
      />
    </div>
  );
}

export default App;
