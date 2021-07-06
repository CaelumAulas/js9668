import { AUTOCAELUM_API, setAuthToken } from "../utils";

export default class LoginService
{
    static async autenticar(login, senha)
    {
        const dadosAutenticacao = { login, senha };
        let url = AUTOCAELUM_API + '/usuarios/login';

        const resposta = await fetch( url, {
            method: 'POST',
            body: JSON.stringify(dadosAutenticacao)
        });

        const dadosServidor = await resposta.json();
        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        setAuthToken(dadosServidor.token);
    }
}