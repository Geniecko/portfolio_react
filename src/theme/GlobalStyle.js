import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: #F2F2F2;
    color: #363636;
  }

  a{
     cursor:pointer;
     text-decoration:none;
  }

  button{
     cursor:pointer;
     font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyle;
