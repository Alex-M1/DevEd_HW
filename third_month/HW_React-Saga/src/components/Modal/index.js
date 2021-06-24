import { connect } from 'react-redux';
import { setVisible, postPerson } from '../../store/actions';
import Modal from './Modal';

const mapDispatchToProps = {
  setVisible, postPerson,
};
export default connect(null, mapDispatchToProps)(Modal);
