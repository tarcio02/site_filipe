
import { GlobalStyle } from "./styles/GlobalStyle";
import Inicio from "./container/Inicio/Index/"
import Historia from "./container/Historia/Historia"
import Patrocinio from "./container/Patrocinio/Index";
import Pacotes from "./container/Pacotes/inde";
import FAQ from "./container/Faq/Index";
import Footer from "./container/Footer/Inicio/Index";

function App() {

  return (
    <>
      <GlobalStyle />
      <Inicio />
      <Historia />
      <Patrocinio />
      <Pacotes />
      <FAQ />
      <Footer />
    </>
  );
}


export default App
