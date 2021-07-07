import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
// import '../../assets/css/bootstrap.min.css';
import logo from '../../assets/images/logo-rodape.png';
import VeiculoService from '../../services/VeiculoService';
import useValidations from '../../hooks/useValidations';
import useFormValidator from '../../hooks/useFormValidator';
import { formataMoeda } from '../../utils';

export default function VeiculosAdminPage() {
    const inputModelo = useRef();
    const inputPreco = useRef();
    const inputFoto = useRef();
    const inputDescricao = useRef();
    const [veiculos, setVeiculos] = useState([]);
    const { isEmpty, isMenorIgualZero } = useValidations();
    const { validate, errors, isFormValid, resetValidator } = useFormValidator({
        modelo: isEmpty('Modelo é obrigatório!'),
        preco: isMenorIgualZero('Preço inválido!'),
        descricao: isEmpty('Descrição é obrigatória')
    });

    useEffect(() => {
        VeiculoService.getVeiculos().then(listaVeiculos => setVeiculos(listaVeiculos));
    }, []);

    const deleteVeiculo = async (id) => {
        try
        {
            await VeiculoService.deleteVeiculo(id);
            const listaAtualizada = veiculos.filter(veiculo => veiculo.id !== id);
            setVeiculos(listaAtualizada);
        }
        catch(erro) {
            alert(erro.message);
        }
    }

    const handleAddVeiculo = async (e) => {
        e.preventDefault();

        try 
        {
            let modelo = inputModelo.current.value;
            let preco = inputPreco.current.value;
            let descricao = inputDescricao.current.value;
            let foto = inputFoto.current.value;

            const veiculo = await VeiculoService.addVeiculo(modelo, foto, preco, descricao);
            setVeiculos([veiculo, ...veiculos]);
            alert('Veículo cadastrado com sucesso!');
            e.target.reset();
            resetValidator();
        }
        catch(erro) {
            alert(erro.message);
        }
    }


    return (
        <>
            <Helmet>
                <title>AutoCaelum | Gerenciar Veículos</title>
            </Helmet>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand mr-auto" href="#">
                    <img src={logo} className="d-inline-block align-top mr-3" alt="" />
                    Administração
                </a>
                <button className="btn btn-danger">
                    Sair
                </button>
            </nav>
            <div className="jumbotron container p-5 mb-5">
                <h1 className="h2 float-left"><span className="text-secondary">Veículos /</span> Gerenciar</h1>
                <div className="clearfix"></div>
                <hr />
                <p className="lead mb-0">
                    Utilize os recursos abaixo para realizar o gerenciamento dos veículos do site.
                </p>
            </div>
            <div className="container">
                <form onSubmit={ handleAddVeiculo } method="POST" className="card" action="" enctype="multipart/form-data">
                    <div className="card-body">
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label>* Modelo:</label>
                                <input type="text" ref={inputModelo} className="form-control" onBlur={validate} name="modelo" />
                                { errors.modelo && <span className="text-danger">{errors.modelo}</span> }
                            </div>
                            <div className="form-group col-md-12">
                                <label>* Preco:</label>
                                <input type="number" ref={inputPreco} className="form-control" onBlur={validate} name="preco" />
                                { errors.preco && <span className="text-danger">{errors.preco}</span> }
                            </div>
                            <div className="form-group col-md-12">
                                <label>Foto:</label>
                                <input type="text" ref={inputFoto} className="form-control" name="foto" placeholder="URL da foto" />
                            </div>
                            <div className="form-group col-md-12">
                                <label>* Descrição:</label>
                                <textarea name="descricao" ref={inputDescricao} onBlur={validate} className="form-control" rows="10"></textarea>
                                { errors.descricao && <span className="text-danger">{errors.descricao}</span> }
                            </div>
                            <div className="form-group col-md-12">
                                <button disabled={!isFormValid} className="btn btn-lg btn-success">
                                    Cadastrar Veículo
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
            </div>
            <div className="container">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Descrição</th>
                            <th scope="col" width="10%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            veiculos.map(veiculo => {
                                return (
                                    <tr key={veiculo.id}>
                                        <th scope="row">{veiculo.id}</th>
                                        <td><img src={veiculo.foto} width="100" className="img-responsive" /></td>
                                        <td>{veiculo.modelo}</td>
                                        <td>{formataMoeda(veiculo.preco)}</td>
                                        <td>{veiculo.descricao}</td>
                                        <td>
                                            <button onClick={() => deleteVeiculo(veiculo.id)} className="btn btn-danger" title="Excluir">
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
