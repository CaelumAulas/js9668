import React, { Component } from "react";

export default class Cabecalho extends Component {
    render() {
        return (
            <header className="jumbotron">
                <h1 className="display-4">{ this.props.titulo }</h1>
                <p className="lead">
                    { this.props.texto }
                </p>
            </header>
        );
    }
}
