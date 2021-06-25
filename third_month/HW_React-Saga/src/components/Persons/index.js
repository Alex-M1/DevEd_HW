import { connect } from 'react-redux';
import { getPerson, updatePerson, deletePerson } from '../../store/actions';
import { persons } from '../../store/selectors';
import Persons from './Persons';

const mapStateToProps = (state) => ({
  persons: persons(state),
});

const mapDispatchToProps = {
  getPerson, updatePerson, deletePerson,
};
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
