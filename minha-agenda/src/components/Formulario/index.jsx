import React, { Component } from 'react'

export default class Formulario extends Component {

    state = {
        nome: '',
        telefone: '',
        showMsg: false
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let showMsg = true;
        let { nome, telefone } = this.state;

        if (nome && telefone) {
            this.props.formSubmitCallback(nome, telefone);
            nome = telefone = '';
            showMsg = false;
        }

        this.setState({ nome, telefone, showMsg });
    }

    render() {
        return (
            <div className="card mb-3 p-3">
                
                {
                    this.state.showMsg &&
                    <div className="alert alert-warning">
                        Por favor, preencha os campos corretamente!
                    </div>
                }

                <form className="row" onSubmit={this.handleFormSubmit}>
                    <div className="form-group col-md-5">
                        <label>Nome:</label>
                        <input type="text" value={this.state.nome} onChange={(e) => this.setState({ ...this.state, nome: e.target.value })} className="form-control" placeholder="Digite o nome do contato aqui..." />
                    </div>

                    <div className="form-group col-md-5">
                        <label>Telefone:</label>
                        <input type="tel" value={this.state.telefone} onChange={(e) => this.setState({ ...this.state, telefone: e.target.value })} className="form-control" placeholder="Digite o telefone do contato aqui..." />
                    </div>

                    <div className="form-group col-md-2 mt-3 text-center">
                        <button type="submit" className="btn btn-primary btn-lg mt-2 w-100">
                            Salvar
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}