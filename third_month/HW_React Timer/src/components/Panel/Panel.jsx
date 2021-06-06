import React from 'react';
import PropTypes from 'prop-types';
import { CustomBtn } from '../_commons';
import PanelWrapper from './styles';

function Panel({ start, stop, reset }) {
  return (
    <PanelWrapper>
      <CustomBtn title="Stop" clickFunc={stop} />
      <CustomBtn title="Start" clickFunc={start} />
      <CustomBtn title="Reset" clickFunc={reset} />
    </PanelWrapper>
  );
}

export default Panel;

Panel.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
