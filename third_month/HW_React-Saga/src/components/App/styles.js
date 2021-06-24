import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ colors, theme }) => colors[theme].mainBg};
    color: ${({ colors, theme }) => colors[theme].color};
  }
`;
