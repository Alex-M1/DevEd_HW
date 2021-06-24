import React from 'react';
import PropTypes from 'prop-types';
import { StButton } from './styled';

function Button({ children, type, onClick }) {
  return (
    <StButton
      mode={type}
      onClick={onClick}
    >
      {children}
    </StButton>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
