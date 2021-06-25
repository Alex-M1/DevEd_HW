import styled from 'styled-components';

export const StRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  position: relative;
`;

export const StCell = styled.div`
  border: 1px solid black;
  padding: 3px 0;
`;

export const StDelete = styled.span`
  position: absolute;
  right: -20px;
  font-size: 25px;
  cursor: pointer;
  align-self: center;
`;
