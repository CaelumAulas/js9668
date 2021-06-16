export default function Cabecalho( { texto, titulo } ) {
    return (
        <header className="jumbotron">
            <h1 className="display-4">{ titulo }</h1>
            <p className="lead">
                { texto }
            </p>
        </header>
    );
}
