import React from 'react';
import PropTypes from 'prop-types';

function Input({ value, onChange, readOnly = false }) {
  const handleInputChange = (e) => {
    const regExp = /[0-9]/;
    if (!regExp.test(+e.target.value)) return;
    onChange(e.target.value);
  };
  return (
    <input value={value} onChange={handleInputChange} readOnly={readOnly} />
  );
}

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
};
