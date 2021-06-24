import { connect } from 'react-redux';
import { setInputValue } from '../../../../store/actions';
import { iptValue } from '../../../../store/selectors';
import FormItem from './FormItem';

const mapStateToProps = (state, props) => ({
  value: iptValue(state, props.type),
});

const mapDispatchToProps = (dispatch, props) => ({
  onChange: (value) => dispatch(setInputValue(props.type, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormItem);
