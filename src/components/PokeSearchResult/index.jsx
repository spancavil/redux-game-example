import React from 'react'
import { useSelector } from 'react-redux'

const PokeSearchResult = () => {
    //Utilizamos el contenido del store
    const searcher = useSelector((state)=> state.searcher)
    
    return (
        <div>
            {searcher.loading && <h4>Loading ... </h4>}
            {searcher.pokemon.length !== 0 && 
                <div>
                    <h4>Nombre: {searcher.pokemon.name}</h4>
                    <img src={searcher.pokemon.sprites.front_default} alt="pokemon"/>
                </div>}
            {searcher.error &&
                <h4 className="text-danger">{searcher.error}</h4>}
        </div>
    )
}

export default PokeSearchResult
