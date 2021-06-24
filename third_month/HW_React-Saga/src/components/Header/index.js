import { connect } from 'react-redux';
import { setVisible } from '../../store/actions';
import { modalVisible } from '../../store/selectors';
import Header from './Header';

const mapStateToProps = (state) => ({
  isVisible: modalVisible(state),
});
const mapDispatchToProps = {
  setVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
