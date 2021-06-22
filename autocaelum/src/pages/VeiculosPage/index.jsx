import MasterLayout from "../../components/MasterLayout";
import VeiculosList from "../../components/VeiculosList";

export default function VeiculosPage() {
    return (
        <MasterLayout>
            <main className="container lista-veiculos">
                <h1 className="cabecalho-pagina">Veículos</h1>
                <VeiculosList quantidade={12} mostrarTitulo={false} />
            </main>
        </MasterLayout>
    );
}