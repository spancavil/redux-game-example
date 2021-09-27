import { FETCH_POKEMON_ERROR, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions/pokemonSearcher";

const initialState = {
    loading: false,
    pokemon: [],
    error: ""
}

const searcher = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        
        case FETCH_POKEMON_ERROR:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default searcher;