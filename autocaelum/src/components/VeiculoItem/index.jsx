import React from 'react'
import { formataMoeda } from '../../utils'

export default function VeiculoItem({ foto, modelo, preco }) {
    return (
        <li>
            <img src={foto} alt={modelo} />
            <h3>{modelo}</h3>
            <p>
                {formataMoeda(preco)}
            </p>
            <a href="#" class="lnk-destaque">
                Ver Detalhes
            </a>
        </li>
    )
}
