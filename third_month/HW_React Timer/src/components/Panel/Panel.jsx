import React from 'react';
import { CustomBtn } from '../_commons';
import PanelWrapper from './styles';

function Panel() {
  return (
    <PanelWrapper>
      <CustomBtn title="Stop" />
      <CustomBtn title="Start" />
      <CustomBtn title="Reset" />
    </PanelWrapper>
  );
}

export default Panel;
