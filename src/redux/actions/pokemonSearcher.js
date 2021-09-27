import Axios from 'axios';
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonError = (error) => {
    return {
        type: FETCH_POKEMON_ERROR,
        payload: error
    }
}

const fetchPokemon = (valor) => {

    //FUNCION QUE ME DEVUELVE OTRA FUNCION
    return(dispatch) => {
        dispatch(fetchPokemonRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response => {
            dispatch(fetchPokemonSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchPokemonError("Pokemon no encontrado"))
        })
    }
}

export default fetchPokemon