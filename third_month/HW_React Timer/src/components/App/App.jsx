import React, { useState } from 'react';
import Display from '../Display';
import Panel from '../Panel';
import { Application, StAppHead, StAppContainer, GlobalStyle } from './styles';
import Theme from '../Theme';
import { useTheme } from '../HOC/withTheme';

function App() {
  const [timer, setTimer] = useState('');
  const { theme } = useTheme();
  return (
    <>
      <Application >
        <StAppContainer>
          <Theme />
          <StAppHead>React Timer</StAppHead>
          <Display setTimer={setTimer} />
          <Panel timer={timer} />
        </StAppContainer>
      </Application>
      <GlobalStyle theme={theme} />
    </>
  );
}

export default App;
