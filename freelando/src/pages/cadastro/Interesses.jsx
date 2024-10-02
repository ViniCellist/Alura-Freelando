import { useState } from "react";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import GrupoRadio from './../../components/Radio/GrupoRadio';

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: "Design e Multimídia",
    },
    {
        valor: 3,
        label: "Revisão",
    },
    {
        valor: 4,
        label: "Tradução",
    },
    {
        valor: 5,
        label: "Transcrição",
    },
    {
        valor: 6,
        label: "Marketing",
    }
]

const Interesses = () => {
    const [opcao, setOpcao] = useState("");

    return (
        <div style={{textAlign: "center"}}>
            <Tipografia variante="h1" componente="h1">
              Crie seu cadastro
            </Tipografia>
            <GrupoRadio 
                opcoes={opcoes}
                valor={opcao}
                onChange={setOpcao}
            />
            <Tipografia variante="h3" componente="h2">
              Qual a área de interesse?
            </Tipografia>
        </div>
    );
}

export default Interesses;