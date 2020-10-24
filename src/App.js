import React, {useEffect} from "react";
import "./styles.css";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import { connect } from 'react-redux'
import { CLICK } from './store/action'
import fetchPokemons from './store/fetchPokemons'

// 3. maintenant j'ai accès au store et aux actions comme une prop
const App = ({handleClick, fetchPokemons}) => {
  useEffect(() => {
    fetchPokemons()}, [fetchPokemons]
  )
  return (
    <div className="App">
      <GameBoy />
      <PokeList />
    </div>
  );
};


// 1. actions : cette fonction permet de mapper une action comme une prop
const mapDispatchToProps = dispatch => {
  return ({
    handleClick: () =>  dispatch({ type: CLICK}),
    fetchPokemons: () => dispatch( fetchPokemons())
  })
}

// 2. la connexion entre store/actions et les props se fait dans l'export ainsi
// export default App
export default connect(null, mapDispatchToProps)(App);
