import ListaContatos from "./components/ListaContatos";
import FormularioContato from "./components/FormularioContato";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>Lista de Contatos</h1>
      <FormularioContato />
      <ListaContatos />
    </div>
  );
}

export default App;
