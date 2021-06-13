import React, { useEffect, useState } from 'react';
import { StTimer } from './styles';

function Timer({ num }) {
  const [timerValue, setTimerValue] = useState('00:00');
  const addZero = (num) => (num >= 10 ? num : `0${num}`);
  const setTimer = (num) => {
    const min = addZero(Math.floor(num / 60));
    const sec = addZero(num % 60);
    setTimerValue(`${min}:${sec}`);
  };
  useEffect(() => {
    setTimer(num);
  }, [num]);
  return (
    <StTimer>
      {timerValue}
    </StTimer>
  );
}

export default Timer;
