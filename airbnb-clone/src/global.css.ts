import { createGlobalStyle } from "styled-components";
import { device } from "./constants/ui/breakpoints";
import { black } from  "./constants/ui/colors";

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  font-family: 'Circular', sans-serif;
}

body {
  color: ${black};
  padding: 0 24px;
  margin: auto;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
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
