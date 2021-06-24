import React from 'react';
import PropTypes from 'prop-types';
import Button from '../__common__/Button/Button';
import ThemeSelect from './ThemeSelect';
import Modal from '../Modal';

const Header = ({ isVisible, setVisible }) => {
  const modal = isVisible ? <Modal /> : null;
  const onButtonClick = () => {
    setVisible(true);
  };
  return (
    <header>
      <div>
        Person Manager
      </div>
      <Button type="primary" onClick={onButtonClick}>
        Add person
      </Button>
      <ThemeSelect />
      {modal}
    </header>
  );
};

export default Header;

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
