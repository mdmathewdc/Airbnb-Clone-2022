import { Header, Hero, Footer, TryHosting } from "./components";
import GlobalStyle from "./global.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <TryHosting />
      <Footer />
    </div>
  );
}

export default App;
