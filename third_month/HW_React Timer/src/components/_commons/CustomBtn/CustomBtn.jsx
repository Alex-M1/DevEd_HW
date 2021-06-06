import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';

function CustomBtn({ title, clickFunc }) {
  return (
    <Button onClick={clickFunc}>{title}</Button>
  );
}

export default CustomBtn;

CustomBtn.propTypes = {
  title: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};
