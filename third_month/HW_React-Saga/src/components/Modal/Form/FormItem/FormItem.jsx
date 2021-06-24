import React from 'react';
import PropTypes from 'prop-types';
import { StFormItem } from '../styled';

function FormItem({ title, value, placeholder, onChange }) {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <StFormItem>
      <span>{title}</span>
      <input
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </StFormItem>
  );
}

export default FormItem;

FormItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
