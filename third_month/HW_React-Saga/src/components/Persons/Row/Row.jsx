import React from 'react';
import PropTypes from 'prop-types';
import { StRow, StDelete } from './styled';
import Cell from './Cell';

function Row({ isHead, _id, name, age, phone, email, company, updatePerson, deletePerson }) {
  const onDblClick = (e) => {
    if (!isHead) {
      e.target.contentEditable = true;
    }
  };
  const onDeleteClick = () => deletePerson(_id);
  return (
    <StRow >
      <Cell onDblClick={onDblClick} updatePerson={updatePerson} id={_id} type="name">{name}</Cell>
      <Cell onDoubleClick={onDblClick} updatePerson={updatePerson} id={_id} type="age">{age}</Cell>
      <Cell onDoubleClick={onDblClick} updatePerson={updatePerson} id={_id} type="phone">{phone}</Cell>
      <Cell onDoubleClick={onDblClick} updatePerson={updatePerson} id={_id} type="email">{email}</Cell>
      <Cell onDoubleClick={onDblClick} updatePerson={updatePerson} id={_id} type="company">{company}</Cell>
      {!isHead ? <StDelete onClick={onDeleteClick}>&times;</StDelete> : null}
    </StRow>
  );
}

export default Row;

Row.propTypes = {
  _id: PropTypes.string,
  isHead: PropTypes.bool,
  name: PropTypes.string,
  age: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  company: PropTypes.string,
  updatePerson: PropTypes.func,
  deletePerson: PropTypes.func,
};
