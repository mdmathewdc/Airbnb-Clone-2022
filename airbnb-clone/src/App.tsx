import { Header, Hero, Footer, TryHosting, Features, Reviews, WhenAreYou } from "./components";
import GlobalStyle from "./global.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <TryHosting />
      <Reviews />
      <Features />
      <WhenAreYou />
      <Footer />
    </div>
  );
}

export default App;
