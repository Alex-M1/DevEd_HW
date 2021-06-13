import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CustomBtn } from '../_commons';
import PanelWrapper from './styles';
import Timer from '../Timer/Timer';

function Panel({ timer }) {
  const [timeOutId, setTimeOutId] = useState();
  const [timerValue, setTimerValue] = useState(0);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setTimerValue(timer);
  }, [timer]);
  useEffect(() => {
    if (+timerValue <= 0) stop();
  }, [timerValue]);
  const start = () => {
    if (+timerValue <= 0) return;
    setDisabled(true);
    const timeout = setInterval(() => {
      setTimerValue((prev) => prev - 1);
    }, 1000);
    setTimeOutId(timeout);
  };
  const stop = () => {
    clearInterval(timeOutId);
    setDisabled(false);
  };
  const reset = () => {
    clearInterval(timeOutId);
    setTimerValue(0);
    setDisabled(false);
  };
  return (
    <>
      <Timer num={+timerValue} />
      <PanelWrapper>
        <CustomBtn title="Stop" clickFunc={stop} />
        <CustomBtn title="Start" clickFunc={start} disabled={disabled} />
        <CustomBtn title="Reset" clickFunc={reset} />
      </PanelWrapper>
    </>

  );
}

export default Panel;

Panel.propTypes = {
  timer: PropTypes.string,
};
