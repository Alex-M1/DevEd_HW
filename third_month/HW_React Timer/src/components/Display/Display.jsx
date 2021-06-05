import React from 'react';
import { CustomBtn } from '../_commons';
import { DisplayIpt, DisplayWrapper } from './styles';

function Display() {
  return (
    <DisplayWrapper>
      <DisplayIpt type="text" placeholder="Write your value" />
      <CustomBtn title="Set" />
    </DisplayWrapper>
  );
}

export default Display;
