import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
// import '../../assets/css/bootstrap.min.css';
import logo from '../../assets/images/logo-rodape.png';
import useValidations from '../../hooks/useValidations';
import useFormValidator from '../../hooks/useFormValidator';
import { formataMoeda, setAuthToken } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { VeiculosThunkActions } from '../../store/ducks/veiculos';
import { useHistory } from 'react-router-dom';

export default function VeiculosAdminPage() {
    const refForm = useRef();
    const inputModelo = useRef();
    const inputPreco = useRef();
    const inputFoto = useRef();
    const inputDescricao = useRef();
    const history = useHistory();
    const { data: veiculos, error, status } = useSelector( state => state.veiculos ); // data, error, status
    const dispatch = useDispatch();
    const { isEmpty, isMenorIgualZero } = useValidations();
    const { validate, errors, isFormValid, resetValidator } = useFormValidator({
        modelo: isEmpty('Modelo é obrigatório!'),
        preco: isMenorIgualZero('Preço inválido!'),
        descricao: isEmpty('Descrição é obrigatória')
    });

    useEffect(() => {

        if (veiculos.length === 0) {
            dispatch(VeiculosThunkActions.loadVeiculos());
        }
        else if (status === 'ADDED') {
            alert('Veículo cadastrado com sucesso!');
            refForm.current.reset();
            resetValidator();
        }
        else if (status === 'DELETED') {
            alert('Veículo excluído com sucesso!');
        }

    }, [error, status, veiculos]);

    const logout = () => {
        setAuthToken('');
        history.push('/admin/login');
    }

    const deleteVeiculo = (id) => dispatch(VeiculosThunkActions.deleteVeiculo(id));

    const handleAddVeiculo = (e) => {
        e.preventDefault();

        let modelo = inputModelo.current.value;
        let preco = inputPreco.current.value;
        let descricao = inputDescricao.current.value;
        let foto = inputFoto.current.value;

        dispatch(VeiculosThunkActions.addVeiculo(modelo, foto, preco, descricao));
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
                <button onClick={() => logout()} className="btn btn-danger">
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
                { error && <div className="alert alert-warning mb-3">{error}</div> }
                <form ref={refForm} onSubmit={ handleAddVeiculo } method="POST" className="card" action="" enctype="multipart/form-data">
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
