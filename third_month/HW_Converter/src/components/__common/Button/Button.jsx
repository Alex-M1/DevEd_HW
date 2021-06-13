import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Convert
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
