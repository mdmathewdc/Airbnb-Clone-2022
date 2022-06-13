import { Header, Hero, Footer, TryHosting, Features } from "./components";
import GlobalStyle from "./global.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <TryHosting />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
