import { Header, Hero, Footer } from "./components";
import GlobalStyle from "./global.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
