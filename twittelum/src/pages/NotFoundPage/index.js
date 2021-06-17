import { Link } from "react-router-dom";

export default function NotFoundPage( { location: { pathname } } ) {
    return (
        <div className="container">
            A URL <strong>{ pathname }</strong> não existe no Twittelum, se quiser voltar 
            para a <Link to="/">página inicial basta clicar aqui</Link>.
        </div>
    );
}