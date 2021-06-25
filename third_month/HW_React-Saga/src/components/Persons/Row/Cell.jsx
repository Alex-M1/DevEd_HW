import React from 'react';
import PropTypes from 'prop-types';
import { StCell } from './styled';

function Cell({ id, type, children, onDoubleClick, updatePerson }) {
  const onBlur = (e) => {
    e.target.contentEditable = false;
    updatePerson({ id, type, value: e.target.textContent });
  };
  return <StCell onBlur={onBlur} onDoubleClick={onDoubleClick}>{children}</StCell>;
}

export default Cell;

Cell.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
  updatePerson: PropTypes.func,
  onDoubleClick: PropTypes.func,
};
