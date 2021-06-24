import { TWITTELUM_API, getAuthToken } from '../utils';

export default class TweetService {

    /**
     * Retorna a lista de tweets do servidor da aplicação
     * @returns {Promise<Array>}
     */
    static async getTweets() {
        const url = TWITTELUM_API + '/tweets?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error('Erro ao retornar a lista de tweets do servidor!');
        }

        const tweets = await resposta.json();
        return tweets;
    }
}