import React from "react";

const PokemonItem = ({ pokemon }) => {
  const img_src = pokemon.isCaught
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
    : pokemon.img
  return (
    <li className="pokemon-item">
      <img
        alt={pokemon.name}
        src={
          img_src
        }
      />
      {pokemon.name}
    </li>
  );
};

export default PokemonItem;
