import styled from 'styled-components';

export const StForm = styled.div`
  display: grid;
  grid-template-rows: repeat(5,1fr);
  gap: 5px;
  padding: 10px 0;
  width: 100%;
`;

export const StFormItem = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 5px;
  span{
    justify-self: flex-start;
  }
  input{
    padding: 3px 5px;
    border-radius: 4px;
    justify-self: end;
  }
`;
