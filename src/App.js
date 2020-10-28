import React, {useEffect} from "react";
import "./styles.css";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import { connect } from 'react-redux'
import { CLICK, showPokemon, catchPokemon } from './store/action'
import fetchPokemons from './store/fetchPokemons'
import Loader from './components/Loader';

// 3. maintenant j'ai accès au store et aux actions comme une prop
const App = ({handleClick, fetchPokemons, pending, showPokemon, pokemons, catchPokemon}) => {
  useEffect(() => {
    fetchPokemons()}, [fetchPokemons]
  )
  useEffect(() => {
    console.log(pokemons)}, [pokemons]
  )
  return (
    <div className="App">
      <GameBoy showPokemon={() => {showPokemon(pokemons)}} catchPokemon = {catchPokemon}/>
      {pending ? <Loader/> : <PokeList />}
    </div>
  );
};


// 1. actions : cette fonction permet de mapper une action comme une prop
const mapDispatchToProps = dispatch => {
  return ({
    handleClick: () =>  dispatch({ type: CLICK}),
    fetchPokemons: () => dispatch( fetchPokemons()),
    showPokemon: (pokemons) => dispatch(showPokemon(pokemons)),
    catchPokemon: () => dispatch( catchPokemon()),

  })
}

const mapStateToProps = ({ pending, pokemons }) => {
  return ({
    pending,
    pokemons
  })
}

// 2. la connexion entre store/actions et les props se fait dans l'export ainsi
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);
