import styled from 'styled-components';

const btnStyles = {
  primary: {
    bg: '#2189eb',
    hoverBg: '#0071db',
  },
  cancel: {
    bg: '#eb3434',
    hoverBg: '#f51616',
  },
};

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
