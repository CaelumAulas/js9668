import React from 'react'

export default function FormBusca() {
    return (
        <form className="flex" action="">
            <label htmlFor="termo">Caixa de pesquisa</label>
            <input type="text" name="termo" id="termo" placeholder="Digite sua pesquisa..." />
            <button type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
    )
}
