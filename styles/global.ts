import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.colorSecondary};
    font: 400 16px Roboto, sans-serif;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.backgroundSecondary};
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: ${props => props.theme.backgroundSecondary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colorPrimary};
  }
`;