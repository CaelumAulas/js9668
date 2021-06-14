import React, { Component } from "react";

export default class Cabecalho extends Component {
    render() {
        return (
            <header className="jumbotron">
                <h1 className="display-4">Minha Agenda</h1>
                <p className="lead">
                    Confira abaixo sua lista de contatos cadastrados.
                </p>
            </header>
        );
    }
}
