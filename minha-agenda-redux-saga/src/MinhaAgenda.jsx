import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Formulario from './components/Formulario';
import TabelaContatos from './components/TabelaContatos';
import Rodape from './components/Rodape';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadContatos, addContato, deleteContato } from './store/ducks/contatos';

function MinhaAgenda() {
  const contatos = useSelector(state => state.contatos.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadContatos()), []);

  const addContact = (nome, telefone) => dispatch(addContato({ nome, telefone }));
  const removeContact = (indice) => dispatch(deleteContato(indice));
  
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
