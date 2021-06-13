import React from 'react';
import PropTypes from 'prop-types';
import { StSelect, StOption } from './styled';

function Dropdown({ values, dropValue, onChange }) {
  const handleChange = (e) => onChange(e.target.value);
  return (
    <StSelect value={dropValue} onChange={handleChange}>
      {values.map((el) => <StOption value={el} key={el}>{el}</StOption>)}
    </StSelect >
  );
}

export default Dropdown;

Dropdown.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
