import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import MasterLayout from "../../components/MasterLayout";
import '../../assets/css/fale-conosco.css';
import useValidations from '../../hooks/useValidations';
import useFormValidator from '../../hooks/useFormValidator';

export default function ContatoPage() {
    const { isEmail, isEmpty, isTelefoneOuCelular } = useValidations();
    const { errors, isFormValid, validate } = useFormValidator({
        nome: isEmpty('Nome é obrigatório!'),
        email: isEmail('E-mail inválido!'),
        telefone: isTelefoneOuCelular('Telefone inválido!', false),
        assunto: isEmpty('Assunto é obrigatório!'),
        mensagem: isEmpty('Mensagem é obrigatória!')
    });

    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTel = useRef();
    const inputAssunto = useRef();
    const inputMensagem = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let nome = inputNome.current.value.trim();
        let email = inputEmail.current.value.trim();
        let tel = inputTel.current.value.trim();
        let assunto = inputAssunto.current.value.trim();
        let msg = inputMensagem.current.value.trim();

        alert('Mensagem enviada com sucesso!');
    }

    return (
        <MasterLayout>
            <Helmet>
                <title>AutoCaelum | Fale conosco</title>
            </Helmet>
            <main className="container fale-conosco">
                <h1 className="cabecalho-pagina">Fale conosco</h1>
                <p>
                    Para entrar em contato conosco, preencha o formulário abaixo:
                </p>
                <div className="flex">
                    <form onSubmit={ handleSubmit }>
                        <div className="campo">
                            <input type="text" ref={inputNome} onBlur={ validate } name="nome" placeholder="* Seu nome:" />
                            { errors.nome && <span className="erro">{ errors.nome }</span> }
                        </div>
                        <div className="campo">
                            <input type="text" ref={inputEmail} onBlur={ validate } name="email" placeholder="* Seu e-mail:" />
                            { errors.email && <span className="erro">{ errors.email }</span> }
                        </div>
                        <div className="campo">
                            <input type="text" ref={inputTel} name="telefone" onBlur={ validate } placeholder="Seu telefone:" />
                            { errors.telefone && <span className="erro">{ errors.telefone }</span> }
                        </div>
                        <div className="campo">
                            <input type="text" ref={inputAssunto} onBlur={ validate } name="assunto" placeholder="* Assunto da mensagem:" />
                            { errors.assunto && <span className="erro">{ errors.assunto }</span> }
                        </div>
                        <div className="campo">
                            <textarea ref={inputMensagem} onBlur={ validate } name="mensagem" placeholder="* Digite sua mensagem aqui..."></textarea>
                            { errors.mensagem && <span className="erro">{ errors.mensagem }</span> }
                        </div>
                        <div className="campo">
                            <button disabled={ !isFormValid } className="btn lnk-destaque">
                                Enviar
                            </button>
                        </div>
                    </form>
                    <iframe title="Mapa da localização da AutoCaelum" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448598130898!2d-46.634653385383224!3d-23.588239368469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1624224472643!5m2!1spt-BR!2sbr" style={{border: '0px'}} allowFullScreen={true} loading="lazy"></iframe>
                </div>
            </main>
        </MasterLayout>
    );
}