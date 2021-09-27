import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopActions"

const default_state={
    pokemons: 30,
    cantidadUsuario: 0,
}

const game_shop = (state = default_state, action ) => {
    switch (action.type){
        case BUY_POKEMON: {
            return {
                ...state,
                pokemons: state.pokemons - action.payload,
                cantidadUsuario: state.cantidadUsuario + 1
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemons: state.pokemons + action.payload,
                cantidadUsuario: state.cantidadUsuario - 1
            }
        }

        default: return state
    }
}

export default game_shop;