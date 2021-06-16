import React, { Component } from "react";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import TabelaContatos from "./components/TabelaContatos";

class MinhaAgenda extends Component {
  state = {
    contatos: []
  }

  addContact = (nome, telefone) => {
    const contato = { nome, telefone };
    const listaContatos = [...this.state.contatos, contato];
    this.setState({ contatos: listaContatos });
  }

  removeContact = (indice) => {
    // const listaContatos = this.state.contatos.filter((c, index) => indice !== index);
    this.state.contatos.splice(indice, 1);
    this.setState({ contatos: [...this.state.contatos] });
  }

  render() {
    return (
      <>
        <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
        <Container>
          <Formulario formSubmitCallback={this.addContact} />
        </Container>
        <Container>
          <TabelaContatos removeContactCallback={this.removeContact} listaContatos={this.state.contatos} />
        </Container>
        <Rodape />
      </>
    );
  }
}

export default MinhaAgenda;
