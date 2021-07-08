/*
 * 
 */
export default class ContatoService {
    static getContatos() {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
                resolve(contatos);
            }, 1000);
        });
    }

    static addContato(contato) {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
                contatos.unshift(contato);
                localStorage.setItem('contatos', JSON.stringify(contatos));
                resolve(contato);
            }, 1000);
        });
    }

    static removeContato(index) {
        return new Promise((resolve, reject) => {
            setTimeout(_ => {
                const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
                contatos.splice(index, 1);
                localStorage.setItem('contatos', JSON.stringify(contatos));
                resolve();
            }, 1000);
        });
    }
}