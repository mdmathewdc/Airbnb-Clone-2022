import { Header } from "./components";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { TABLET, LAPTOP, DESKTOP } from "./constants/ui/breakpoints";
import GlobalStyle from "./global.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
