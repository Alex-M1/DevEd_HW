import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';

function CustomBtn({ title, clickFunc, disabled }) {
  return (
    <Button onClick={clickFunc} disabled={disabled}>{title}</Button>
  );
}

export default CustomBtn;

CustomBtn.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  clickFunc: PropTypes.func.isRequired,
};
