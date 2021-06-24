import { connect } from 'react-redux';
import { getPerson } from '../../store/actions';
import Persons from './Persons';

const mapDispatchToProps = {
  getPerson,
};
export default connect(null, mapDispatchToProps)(Persons);
