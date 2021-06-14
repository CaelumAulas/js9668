import React, { Component } from "react";
import Cabecalho from "./components/Cabecalho";

class MinhaAgenda extends Component {
  render() {
    return (
      <>
        <Cabecalho />

        <div className="container">
          <div className="card mb-3 p-3">

            {/* Formulário de Cadastro*/}
            <form className="row">
              <div className="form-group col-md-5">
                <label>Nome:</label>
                <input type="text" className="form-control" placeholder="Digite o nome do contato aqui..." />
              </div>

              <div className="form-group col-md-5">
                <label>Telefone:</label>
                <input type="tel" className="form-control" placeholder="Digite o telefone do contato aqui..." />
              </div>

              <div className="form-group col-md-2 mt-3 text-center">
                <button type="submit" className="btn btn-primary btn-lg mt-2 w-100">
                  Salvar
                </button>
              </div>
            </form>

          </div>
        </div>

        <div className="container">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mateus</td>
                <td>(11) 4141-5255</td>
                <td>
                  <button className="btn btn-danger">
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default MinhaAgenda;
