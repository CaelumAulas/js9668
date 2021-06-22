import React from 'react';
import VeiculoItem from '../VeiculoItem';
import '../../assets/css/veiculos.css';

export default function VeiculosList({ quantidade, mostrarTitulo }) {

    const renderVeiculos = () => {
        const lista = [];

        for (let i = 1; i <= quantidade; i++) 
        {
            lista.push(
                <VeiculoItem key={i} />
            );
        }

        return lista;
    } 

    return (
        <section className="container lista-veiculos">
            { mostrarTitulo && <h2>Veículos</h2> }
            <ul className="flex">
                { renderVeiculos() }
            </ul>
        </section>
    )
}

VeiculosList.defaultProps = {
    quantidade: 4,
    mostrarTitulo: true
}
