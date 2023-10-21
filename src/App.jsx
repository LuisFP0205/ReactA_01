import Footer from "./components/Footer";
import Header from "./components/Header";
import TitleWithText from "./components/TiitleWithText";


function App() {
  return (
    <>

  <Header />

  <TitleWithText 
  title="Titulo do bloco"
  content="aqui tem o conteudo dese bloco" 
  />

  <TitleWithText 
  title="Titulo do outro bloco"
  content="aqui tem o conteudo do outro bloco" 
  />

  <Footer 
  author="Luis Felipe Pagnussat"
  />

    </> 
  );
}

export default App
