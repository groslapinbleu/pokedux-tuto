import React from "react";
import { connect } from 'react-redux'
import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons, pending }) => {
  console.log(`pokelist : pending=${pending}`)
  return (
    <div className="list-container">
      <h2>Try : {click}</h2>
      <h2>{pokemons.filter((pokemon) => pokemon.isCaught).length} / {pokemons.length}</h2>
      <ul>
        {pokemons.map(pokemon => {
          return <PokemonItem key={pokemon.id} pokemon={pokemon} />
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ click, pokemons, pending }) => {
  return ({
    click,
    pokemons,
    pending
  })
}

export default connect(mapStateToProps)(PokeList);
