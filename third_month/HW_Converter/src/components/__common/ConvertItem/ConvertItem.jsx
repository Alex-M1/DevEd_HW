import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import Input from '../Input';
import { StConvertItem } from './styled';

function ConvertItem({ inputValue, setInputValue, values, dropValue, onChange, readOnly }) {
  return (
    <StConvertItem>
      <Input value={inputValue} onChange={setInputValue} readOnly={readOnly} />
      <Dropdown values={values} dropValue={dropValue} onChange={onChange} />
    </StConvertItem>
  );
}

export default ConvertItem;

ConvertItem.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropValue: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  setInputValue: PropTypes.func,
  readOnly: PropTypes.bool,
};

ConvertItem.defaultProps = {
  readOnly: false,
};
