import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Persons({ getPerson }) {
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div />
  );
}

export default Persons;

Persons.propTypes = {
  getPerson: PropTypes.func.isRequired,
};
