import './main-style.css';
import React from 'react';
import Display from '../Display';
import Panel from '../Panel';
import { Application, AppContainer, AppHead, Timer } from './styles';

function App() {
  return (
    <Application>
      <AppContainer>
        <AppHead>React Timer</AppHead>
        <Display />
        <Timer>
          00 : 00
        </Timer>
        <Panel />
      </AppContainer>
    </Application>
  );
}

export default App;
