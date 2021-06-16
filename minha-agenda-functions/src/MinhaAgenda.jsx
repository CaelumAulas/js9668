import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Formulario from './components/Formulario';
import TabelaContatos from './components/TabelaContatos';
import Rodape from './components/Rodape';
import { useState } from 'react';

function MinhaAgenda() {
  // useState retorna 2 valores: 1ª valor do estado, 2º a referencia da função de atualização desse estado
  const [contatos, setContatos] = useState([]);

  const addContact = (nome, telefone) => {
    const contato = { nome, telefone };
    contatos.push(contato);
    setContatos([...contatos]);
  }

  const removeContact = (indice) => {
    contatos.splice(indice, 1);
    setContatos([...contatos]);
  }

  
  return (
      <>
        <Cabecalho titulo="Minha Agenda" texto="Confira abaixo sua lista de contatos cadastrados." />
        <Container>
          <Formulario formSubmitCallback={addContact} />
        </Container>
        <Container>
          <TabelaContatos removeContactCallback={removeContact} listaContatos={contatos} />
        </Container>
        <Rodape />
      </>
  );
}

export default MinhaAgenda;
