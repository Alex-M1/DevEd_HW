import styled from 'styled-components';

const Application = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  flex-direction: column;
  height: 150px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

const Timer = styled.div`
  padding-bottom: 5px;
  font-size: 16px;
`;
const AppHead = styled.h1`
  font-size: 18px;
`;
export { Application, AppContainer, AppHead, Timer };
