import { fetchPokemonSuccess, fetchPokemonPending } from './action'

const numberOfPokemons = 10
const urls = []

for (let i = 1; i <= numberOfPokemons; i++) {
    urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

const requests = urls.map((url) => fetch(url))


export default () => {
    return dispatch => {
        dispatch(fetchPokemonPending())

        Promise.all(requests)
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(pokemons => pokemons.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                captureRate: pokemon.capture_rate,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                isCaught: false
            })))
            .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)))
    }
}