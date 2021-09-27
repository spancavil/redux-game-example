import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../../redux/actions/gameShopActions'

const ItemCountHooks = () => {
    const game_shop = useSelector((state)=> state.game_shop)

    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly", padding: "2em", width: "100%" }}>
            <button
                className="btn btn-small btn-dark"
                onClick={() => dispatch(buy_pokemon_action(1))}> Agregar</button>
            <span>Disponible: {game_shop.pokemons}</span>
            <button className="btn btn-small btn-dark"
                onClick={() => dispatch(return_pokemon_action(1))}> Quitar</button>
            <span>Pokemones en su haber: {game_shop.cantidadUsuario}</span>
        </div>
    )
}

export default ItemCountHooks
