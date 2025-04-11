import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }

  input, button {
    padding: 8px;
    font-size: 16px;
  }
`;

export default GlobalStyles;
