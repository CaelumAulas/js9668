import React from 'react'
import '../../assets/css/masterpage.css';
import logoTopo from '../../assets/images/logo-autocaelum-topo.png';
import logoRodape from '../../assets/images/logo-rodape.png';
import FormBusca from '../FormBusca';
import Menu from '../Menu';
import RedesSociais from '../RedesSociais';

export default function MasterLayout({ children }) {
    return (
        <>
            <header id="topo">
                <div className="container flex">
                    <img src={logoTopo} alt="AutoCaelum" />

                    <FormBusca />

                    <a href="#" className="lnk-destaque lnk-financiamento">
                        <i className="fas fa-dollar-sign"></i> Financiamento
                    </a>
                </div>

                <Menu>
                    <RedesSociais />
                </Menu>
            </header>

            { children }

            <footer id="rodape">
                <div className="container flex">
                    <img src={logoRodape} alt="Logo da AutoCaelum" />
                    <RedesSociais />
                </div>

                <div className="container flex">
                    <address>
                        Rua Guarujá, 589 Vila Madalena <br />
                        São Paulo / SP
                    </address>

                    <p>
                        Copyright &copy; AutoCaelum<br />
                        Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </>
    )
}
