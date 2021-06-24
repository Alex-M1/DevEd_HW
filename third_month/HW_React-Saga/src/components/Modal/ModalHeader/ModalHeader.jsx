import React from 'react';
import PropTypes from 'prop-types';
import { StModalHeader } from './styled';

function ModalHeader({ closeModal }) {
  return (
    <StModalHeader>
      <h1>Add person</h1>
      <span onClick={closeModal}>⨯</span>
    </StModalHeader>
  );
}

export default ModalHeader;

ModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
