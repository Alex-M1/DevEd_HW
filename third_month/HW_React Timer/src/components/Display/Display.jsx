import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CustomBtn } from '../_commons';
import { DisplayIpt, DisplayWrapper } from './styles';
import { useTheme } from '../HOC/withTheme';

function Display({ setTimer }) {
  const [displayVal, setDisplayVal] = useState('');
  const handleChangeIpt = (e) => {
    const reg = /[+-]?(?<!\.)\b[0-9]+\b(?!\.[0-9])/;
    if (!reg.test(+e.target.value)) return;
    setDisplayVal(e.target.value);
  };
  const handleSetClick = () => setTimer(+displayVal);
  const { theme } = useTheme();
  return (
    <DisplayWrapper>
      <DisplayIpt
        type="text"
        value={displayVal}
        onChange={handleChangeIpt}
        placeholder="Write your value"
        theme={theme}
      />
      <CustomBtn
        title="Set"
        clickFunc={handleSetClick}
      />
    </DisplayWrapper>
  );
}

export default Display;

Display.propTypes = {
  setTimer: PropTypes.func.isRequired,
};
