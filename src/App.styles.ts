import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset and base styles */
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5715;
    color: #000000d9;
    font-size: 14px;
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
