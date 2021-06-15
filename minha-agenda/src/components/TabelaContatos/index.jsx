import React, { Component } from 'react'

export default class TabelaContatos extends Component {
    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.listaContatos.map(function(contato, index) {
                            return (
                                <tr key={index}>
                                    <td>{contato.nome}</td>
                                    <td>{contato.telefone}</td>
                                    <td>
                                        <button className="btn btn-danger">
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}