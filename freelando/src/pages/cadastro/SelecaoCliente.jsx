import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../components/Tipografia/Tipografia";
import cliente from './assets/cliente.png';
import freelancer from './assets/freela.png';
import { Link } from '../../components/Link/Link';
import { Link as RouterLink } from 'react-router-dom'

const SelecaoCliente = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Tipografia variante="h1" componente="h1">
              Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
              Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to="interesses">
                        <img src={cliente} alt="Imagem que presenta o cliente" />
                        <Tipografia variante="body" componente="body" >
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <RouterLink to="">
                        <img src={freelancer} alt="Imagem que representa o freelancer" />
                        <Tipografia variante="body" componente="body" >
                            Sou freela e preciso de cliente!
                        </Tipografia>
                    </RouterLink>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante='secundaria'>Faça Login!</Link>
                </p>
            </div>
        </div>
    );
}

export default SelecaoCliente;