import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchPokemon from '../../redux/actions/pokemonSearcher';

const PokeSearcher = () => {
    const dispatch = useDispatch();
    const [poke, setPoke] = useState("Mewtwo");

    return (
        <div>
            <input className="form-control mt-3" placeholder="Pokemon a buscar" 
            value={poke}
            onChange = {(e)=> setPoke (e.target.value)}
            ></input>
            <button className="btn btn-small btn-dark"
            onClick = { ()=> dispatch(fetchPokemon(poke))}
            > Search!</button>
        </div>
    )
}

export default PokeSearcher
