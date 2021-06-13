import styled, { createGlobalStyle } from 'styled-components';
import { themes } from '../../constants/theme';

export const Application = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
export const StAppContainer = styled.div`
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

export const StAppHead = styled.h1`
  font-size: 18px;
`;

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => themes[props.theme].mainBg};
    color: ${(props) => themes[props.theme].color};
  }
`;
