import React, {useEffect} from "react";
import "./styles.css";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import { connect } from 'react-redux'
import { CLICK } from './store/action'
import fetchPokemons from './store/fetchPokemons'
import Loader from './components/Loader';

// 3. maintenant j'ai accès au store et aux actions comme une prop
const App = ({handleClick, fetchPokemons, pending}) => {
  useEffect(() => {
    fetchPokemons()}, [fetchPokemons]
  )
  return (
    <div className="App">
      <GameBoy />
      {pending ? <Loader/> : <PokeList />}
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

const mapStateToProps = ({ pending }) => {
  return ({
    pending
  })
}

// 2. la connexion entre store/actions et les props se fait dans l'export ainsi
// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App);
