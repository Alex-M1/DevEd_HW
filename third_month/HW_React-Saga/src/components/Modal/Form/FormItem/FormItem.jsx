import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StFormItem } from '../styled';

function FormItem({ title, value, placeholder, onChange, isRef }) {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };
  const inputRef = useRef(null);

  useEffect(() => {
    if (isRef) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StFormItem>
      <span>{title}</span>
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
      />
    </StFormItem>
  );
}

export default FormItem;

FormItem.propTypes = {
  isRef: PropTypes.bool,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
