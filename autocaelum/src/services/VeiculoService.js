import { AUTOCAELUM_API, API_USER } from "../utils";

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
}