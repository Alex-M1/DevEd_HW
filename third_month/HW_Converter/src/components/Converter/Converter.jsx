import React from 'react';
import PropTypes from 'prop-types';
import { Button, ConvertItem } from '../__common';
import { StConverter } from './styled';

function Converter({
  values,
  primary,
  secondary,
  inputValue,
  resultValue,
  setPrimary,
  setSecondary,
  setInputValue,
  onButtonClick,
}) {
  return (
    <StConverter>
      <ConvertItem
        inputValue={inputValue}
        setInputValue={setInputValue}
        values={values}
        dropValue={primary}
        onChange={setPrimary}
      />
      <ConvertItem
        inputValue={resultValue}
        values={values}
        dropValue={secondary}
        onChange={setSecondary}
        readOnly
      />
      <Button onClick={onButtonClick} />
    </StConverter>
  );
}

export default Converter;

Converter.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  resultValue: PropTypes.string.isRequired,
  setPrimary: PropTypes.func.isRequired,
  setSecondary: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
