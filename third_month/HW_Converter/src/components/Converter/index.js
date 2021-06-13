import { connect } from 'react-redux';
import { setInputValue, setPrimary, setSecondary, setConvertLength } from '../../store/actions';
import { getInputValue, getPrimaryValue, getResultValue, getSecondaryValue } from '../../store/selectors';
import Converter from './Converter';

const mapStateToProps = (state, props) => ({
  primary: getPrimaryValue(state, props.type),
  secondary: getSecondaryValue(state, props.type),
  inputValue: getInputValue(state, props.type),
  resultValue: getResultValue(state, props.type),
});

const mapDispatchToProps = (dispatch, props) => ({
  setPrimary: (value) => dispatch(setPrimary(props.type, value)),
  setSecondary: (value) => dispatch(setSecondary(props.type, value)),
  setInputValue: (value) => dispatch(setInputValue(props.type, value)),
  setConvertLength: () => dispatch(setConvertLength()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Converter);
