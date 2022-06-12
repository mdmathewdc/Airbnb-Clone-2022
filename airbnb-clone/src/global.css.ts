import { createGlobalStyle } from "styled-components";
import { device } from "./constants/ui/breakpoints";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Circular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media ${device.LAPTOP} { 
  max-width: 800px;
}

`;

export default GlobalStyle;
