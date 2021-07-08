import { useState } from "react";

export default function Formulario( { formSubmitCallback } ) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState(''); 
    const [showMsg, setShowMsg] = useState(false); 

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let showMsg = true;

        if (nome && telefone) {
            formSubmitCallback(nome, telefone);
            setNome('');
            setTelefone('');
            showMsg = false;
        }

        setShowMsg(showMsg);
    }

    return (
        <div className="card mb-3 p-3">
            
            {
                showMsg &&
                <div className="alert alert-warning">
                    Por favor, preencha os campos corretamente!
                </div>
            }

            <form className="row" onSubmit={handleFormSubmit}>
                <div className="form-group col-md-5">
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="form-control" placeholder="Digite o nome do contato aqui..." />
                </div>

                <div className="form-group col-md-5">
                    <label>Telefone:</label>
                    <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="form-control" placeholder="Digite o telefone do contato aqui..." />
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