import React from "react";

const PokemonItem = ({pokemon}) => {
  return (
    <li className="pokemon-item">
      <img
        alt={pokemon.name}
        src={
          pokemon.img
        }
      />
      {pokemon.name}
    </li>
  );
};

export default PokemonItem;
