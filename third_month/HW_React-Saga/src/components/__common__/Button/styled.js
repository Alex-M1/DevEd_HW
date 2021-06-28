import styled from 'styled-components';
import { btnStyles } from '../../../helpers';

export const StButton = styled.button`
  background:${({ mode }) => btnStyles[mode].bg};
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 80px;
  &:hover{
    background:${({ mode }) => btnStyles[mode].hoverBg};
  }
`;
