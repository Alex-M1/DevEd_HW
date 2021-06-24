import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../__common__/Button/Button';
import { StBtnGroup } from './styled';

const ButtonGroup = ({ postPerson, closeModal }) => (
  <StBtnGroup>
    <Button type="primary" onClick={postPerson}>Отправить</Button>
    <Button type="cancel" onClick={closeModal}>Отменить</Button>
  </StBtnGroup>
);

export default ButtonGroup;

ButtonGroup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  postPerson: PropTypes.func.isRequired,
};
