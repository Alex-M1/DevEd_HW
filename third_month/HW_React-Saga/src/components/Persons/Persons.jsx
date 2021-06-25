import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './Row/Row';
import { StTable } from './styled';

function Persons({ persons, getPerson, updatePerson, deletePerson }) {
  useEffect(() => {
    getPerson();
  }, []);
  const tableHead = {
    name: 'Имя',
    age: 'Возраст',
    phone: 'Телефон',
    email: 'Почта',
    company: 'Компания',
  };
  return (
    <StTable>
      <Row {...tableHead} isHead />
      {persons.map((el) => <Row key={el._id} {...el} updatePerson={updatePerson} deletePerson={deletePerson} />)}
    </StTable>
  );
}

export default Persons;

Persons.propTypes = {
  persons: PropTypes.array,
  getPerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
};
