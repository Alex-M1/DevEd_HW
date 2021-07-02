import React from 'react';
import PropTypes from 'prop-types';
import { StButton } from './styled';

function Button({ onClick }) {
  return (
    <StButton onClick={onClick}>
      Convert
    </StButton>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
