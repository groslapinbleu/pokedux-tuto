import { CLICK, FETCH_POKEMON_SUCCESS } from './action'

import initialState from './initialState'


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK:
            return ({
                ...state,
                click: state.click + 1
            })
        case FETCH_POKEMON_SUCCESS:
            return ({
                ...state,
                pokemons: action.pokemons
            })
        default:
            return state
    }
}

export default reducer