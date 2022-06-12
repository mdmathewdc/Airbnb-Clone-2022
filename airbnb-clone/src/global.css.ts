import { createGlobalStyle } from "styled-components";
import { device } from "./constants/ui/breakpoints";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Circular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media ${device.TABLET} { 
    padding: 0 40px;
  }
  @media ${device.LAPTOP} { 
    padding: 0 80px;
  }
  @media ${device.DESKTOP} { 
    max-width: 1440px;
  }

}

`;

export default GlobalStyle;
