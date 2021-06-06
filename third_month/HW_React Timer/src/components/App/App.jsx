import './main-style.css';
import React, { useState } from 'react';
import Display from '../Display';
import Panel from '../Panel';
import { Application, AppContainer, AppHead, Timer } from './styles';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timeOutId, setTimeOutId] = useState();
  const [timerValue, setTimerValue] = useState('00:00');

  const addZero = (num) => (num >= 10 ? num : `0${num}`);
  const setTimer = (num) => {
    setSeconds(num);
    const min = addZero(Math.floor(num / 60));
    const sec = addZero(num % 60);
    setTimerValue(`${min}:${sec}`);
  };

  const start = () => {
    const timeout = setInterval(() => {
      setSeconds((prev) => prev - 1);
      console.log(seconds);
      // console.log(seconds);
      // setTimer(seconds - 1);
    }, 1000);
    setTimeOutId(timeout);
  };
  const stop = () => {
    clearInterval(timeOutId);
  };
  const reset = () => {
    clearInterval(timeOutId);
    setTimer(0);
  };
  return (
    <Application>
      <AppContainer>
        <AppHead>React Timer</AppHead>
        <Display setTimer={setTimer} />
        <Timer>
          {timerValue}
        </Timer>
        <Panel
          stop={stop}
          start={start}
          reset={reset}
        />
      </AppContainer>
    </Application>
  );
}

export default App;
