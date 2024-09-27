import styled from '@emotion/styled';
import { useState } from "react";

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;
`;

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estarAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estarAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`;

export const ListaSuspensa = ({titulo, opcoes}) => {
    const [estarAberta, alternarVisibilidade] = useState(false);
    const [opcaoFocada, setOpcaoFocada] = useState(null);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const manipularTecladDoTeclado = (evento) => {
        alternarVisibilidade(true)
        switch (evento.key) {
            case 'ArrowDown':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (focoAntigo == null) {
                        return 0;
                    }

                    return focoAntigo += 1;
                });
                break;
                
            case 'ArrowUp':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo) {
                        return 0;
                    }

                    return focoAntigo -= 1;
                });
                break;

                case 'Enter':
                    evento.preventDefault();
                    setOpcaoFocada(null);
                    alternarVisibilidade(false);
                    setOpcaoSelecionada(opcoes[opcaoFocada]);
                    break;
            default:
                break;
        }
    }

    return (
        <LabelEstilizada>
            {titulo}
            <BotaoEstilizado
                estarAberta={estarAberta} 
                onClick={() => alternarVisibilidade(!estarAberta)}
                onKeyDown={manipularTecladDoTeclado}
            >
                <div>
                    {opcaoSelecionada ? opcaoSelecionada.text : 'Selecione'}
                </div>
                <div>
                    <span>{estarAberta ? '▲' : '▼'}</span>
                </div>
            </BotaoEstilizado>
            {estarAberta && <ul>
                {opcoes.map((opcao, index) => <li 
                    key={opcao.value}
                    focoAtivo={index === opcaoFocada}
                    onClick={() => setOpcaoSelecionada(opcao)}
                >
                    {opcao.text}
                </li>)}
            </ul>}
        </LabelEstilizada>
    );
};