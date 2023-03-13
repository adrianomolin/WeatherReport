import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    font-size: 16px;
    overflow: hidden;
    height: 100%;
    color: ${({ theme }) => theme.colors.secondary.lighter};
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100%;
    background: url('./background-blur.png');
    background-size: 100% 100%;
  }
`;
