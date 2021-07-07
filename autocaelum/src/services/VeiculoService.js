import { AUTOCAELUM_API, API_USER, getAuthToken } from "../utils";

export default class VeiculoService {
    
    /**
     * Retorna uma lista de veículos da API
     * @param {number} quantidade Quantidade de carros a ser retornada da API
     * @param {boolean} randomico Se os dados devem ser randomizados ou não
     * @returns {Promise<Array>}
     */
    static async getVeiculos(quantidade = 0, randomico = false) {
        let url = AUTOCAELUM_API + '/veiculos/u/' + API_USER;

        if (quantidade > 0) {
            url += '/qtd/' + quantidade;
            if (randomico) {
                url += '/random';
            }
        }

        const resposta = await fetch(url);
        const dadosServidor = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        const veiculos = dadosServidor; // Array com os veículos
        return veiculos;
    }

    /**
     * Realiza o cadastro do veículo na API
     * @param {string} modelo Modelo do veículo
     * @param {string} foto Foto do veículo
     * @param {number} preco Preço do Veículo
     * @param {string} descricao Descrição do Veículo
     * @returns {Promise<object>}   Retorna os dados do veículo cadastrado
     */
    static async addVeiculo(modelo, foto, preco, descricao) {
        let url = AUTOCAELUM_API + '/veiculos';
        const token = getAuthToken();
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({ modelo, foto, preco, descricao })
        });

        const dadosServidor = await resposta.json();
        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        return dadosServidor.veiculo;
    }

    /**
     * Exclui o veículo na API da aplicação
     * @param {number} id ID do veículo
     * @returns {Promise<object>}
     */
    static async deleteVeiculo(id) {
        let url = AUTOCAELUM_API + '/veiculos/' + id;
        const token = getAuthToken();
        const resposta = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });

        const dadosServidor = await resposta.json();
        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        return dadosServidor;
    }
}