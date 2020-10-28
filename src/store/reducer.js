import { CLICK, FETCH_POKEMON_PENDING, FETCH_POKEMON_SUCCESS, SHOW_POKEMON, CATCH_POKEMON } from './action'

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
                pokemons: action.pokemons,
                pending: false
            })
        case FETCH_POKEMON_PENDING:
            return ({
                ...state,
                pending: true
            })
        case SHOW_POKEMON:
            return ({
                ...state,
                onScreen: action.onScreen, 
                click: 0
            })
        case CATCH_POKEMON:
            return ({
                ...state,
                click: state.click + 1,
                pokemons: state.pokemons.map(pokemon => {
                    if (state.onScreen) {
                        if (pokemon.id === state.onScreen.id) {
                            // pour le pokemon à l'écran
                            const capture = pokemon.captureRate + action.random
                            if (capture >= 255) {
                                console.log(`pokemon ${pokemon.id} is caught`)
                                return { ...pokemon, isCaught: true }
                            } else {
                                return pokemon
                            }

                        }
                    }
                    return pokemon
                })
            })
        default:
            return state
    }
}

export default reducer