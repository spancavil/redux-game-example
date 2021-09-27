import React from 'react'
import ItemCount from '../ItemCount'
import ItemCountHooks from '../ItemCountHooks'
import PokeSearcher from '../PokeSearcher'
import PokeSearchResult from '../PokeSearchResult'
import './styles.css'

const Card = () => {
    return (
        <div className = "card">
            Compra y venta de pokemon games
            <ItemCount/>
            <ItemCountHooks/>
            <PokeSearcher/>
            <PokeSearchResult/>
        </div>
    )
}

export default Card
