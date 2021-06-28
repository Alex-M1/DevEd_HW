import React from 'react';
import PropTypes from 'prop-types';
import Button from '../__common__/Button/Button';
import ThemeSelect from './ThemeSelect';
import Modal from '../Modal';
import { StHeader } from './styled';

const Header = ({ isVisible, setVisible }) => {
  console.log('123');
  const modal = isVisible ? <Modal /> : null;
  const onButtonClick = () => {
    setVisible(true);
  };
  return (
    <StHeader>
      <div>
        Person Manager
      </div>
      <div>
        <Button type="primary" onClick={onButtonClick}>
          Add person
        </Button>
        <ThemeSelect />
      </div>
      {modal}
    </StHeader>
  );
};

export default Header;

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
