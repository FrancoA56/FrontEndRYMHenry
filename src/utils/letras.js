import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Sans';
    src: url('../font/JosefinSans-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Get Schwifty';
    src: url('../font/get_schwifty.ttf') format('truetype');
  }
  body {
    font-family: 'Josefin Sans', 'Get Schwifty', sans-serif;
  }
`;