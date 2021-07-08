import React, { useEffect } from 'react';
import VeiculoItem from '../VeiculoItem';
import '../../assets/css/veiculos.css';
import { useSelector, useDispatch } from 'react-redux';
import { VeiculosThunkActions } from '../../store/ducks/veiculos';

export default function VeiculosList({ quantidade, mostrarTitulo, randomico }) {
    const veiculos = useSelector( state => state.veiculos.data );
    const dispatch = useDispatch();

    useEffect(_ => {
        dispatch(VeiculosThunkActions.loadVeiculos(quantidade, randomico));
    }, []);

    return (
        <section className="container lista-veiculos">
            { mostrarTitulo && <h2>Veículos</h2> }
            <ul className="flex">
                {
                    veiculos.map(veiculo => {
                        return (
                            <VeiculoItem
                                key={ veiculo.id }
                                { ...veiculo }
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

VeiculosList.defaultProps = {
    quantidade: 4,
    mostrarTitulo: true,
    randomico: false
}
