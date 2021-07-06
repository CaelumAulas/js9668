import React, { useRef } from 'react'
import { Helmet } from 'react-helmet';
// import '../../assets/css/bootstrap.min.css';
import logo from '../../assets/images/logo-rodape.png';
import useFormValidator from '../../hooks/useFormValidator';
import useValidations from '../../hooks/useValidations';
import LoginService from '../../services/LoginService';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    const inputLogin = useRef();
    const inputSenha = useRef();
    const history = useHistory();
    const { isEmpty } = useValidations();
    const { errors, validate, isFormValid } = useFormValidator({
        login: isEmpty('Login é obrigatório!'),
        senha: isEmpty('Senha é obrigatória!')
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        let login = inputLogin.current.value;
        let senha = inputSenha.current.value;

        try 
        {
            await LoginService.autenticar(login, senha);
            history.push('/admin/veiculos');
        }
        catch(erro)
        {
            alert(erro.message);
        }
    }

    return (
        <>
            <Helmet>
                <title>AutoCaelum | Login</title>
            </Helmet>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand mr-auto" href="#">
                    <img src={logo} className="d-inline-block align-top mr-3" alt="" />
                    Administração
                </a>
            </nav>
            <div className="container my-5">
                <form onSubmit={ handleLogin } className="card mx-auto w-50">
                    <div className="card-header p-5 text-center">
                        <h3 className="h2 mb-0">Área Restrita</h3>
                        <span>Utilize o formulário abaixo para acessar a Área Administrativa.</span>
                    </div>

                    <div className="card-body p-5">

                        <div className="form-group">
                            <label>* Usuario:</label>
                            <input type="text" ref={inputLogin} onBlur={validate} name="login" placeholder="Insira seu usuário" className="form-control" />
                            { errors.login && <span className="text-danger">{errors.login}</span> }
                        </div>
                        <div className="form-group">
                            <label>* Senha:</label>
                            <input type="password" ref={inputSenha} onBlur={validate} name="senha" placeholder="Insira sua senha" className="form-control" />
                            { errors.senha && <span className="text-danger">{errors.senha}</span> }
                        </div>
                        <div className="form-group">
                            <button disabled={!isFormValid} className="btn btn-primary btn-lg">
                                Entrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
