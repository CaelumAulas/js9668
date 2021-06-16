export default function TabelaContatos( { listaContatos, removeContactCallback } ) {
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
                    listaContatos.map((contato, index) => {
                        return (
                            <tr key={index}>
                                <td>{contato.nome}</td>
                                <td>{contato.telefone}</td>
                                <td>
                                    <button onClick={() => removeContactCallback(index)} className="btn btn-danger">
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