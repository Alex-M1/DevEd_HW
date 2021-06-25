import React from 'react';
import { useTheme } from '../../helpers/withTheme';
import Header from '../Header';
import Persons from '../Persons';
import { GlobalStyle, StContainer } from './styles';

function App() {
  const { colors, theme } = useTheme();
  return (
    <StContainer>
      <Header />
      <Persons />
      <GlobalStyle
        colors={colors}
        theme={theme}
      />
    </StContainer>
  );
}

export default App;
