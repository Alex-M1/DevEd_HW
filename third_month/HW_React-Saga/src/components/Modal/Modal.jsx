import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import ModalHeader from './ModalHeader';
import ButtonGroup from './ButtonGroup';
import { StModalBackground, StModal } from './styled';

const Modal = ({ setVisible, postPerson }) => {
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <StModalBackground>
      <StModal>
        <ModalHeader closeModal={closeModal} />
        <Form />
        <ButtonGroup closeModal={closeModal} postPerson={postPerson} />
      </StModal>
    </StModalBackground>
  );
};

export default Modal;

Modal.propTypes = {
  setVisible: PropTypes.func.isRequired,
  postPerson: PropTypes.func.isRequired,
};
