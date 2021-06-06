import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CustomBtn } from '../_commons';
import { DisplayIpt, DisplayWrapper } from './styles';

function Display({ setTimer }) {
  const [displayVal, setDisplayVal] = useState('');
  const handleChangeIpt = (e) => setDisplayVal(e.target.value);
  const handleSetClick = () => setTimer(+displayVal);

  return (
    <DisplayWrapper>
      <DisplayIpt
        type="text"
        value={displayVal}
        onChange={handleChangeIpt}
        placeholder="Write your value"
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
