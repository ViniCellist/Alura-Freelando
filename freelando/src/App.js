import { CampoTexto } from "./components/CampoDeTexto/CampoDeTexto";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Tipografia } from "./components/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <Tipografia variante="h1" componente="h1">Freelando</Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" /> 
      </Card>
    </ProvedorTema>
  );
}

export default App;
