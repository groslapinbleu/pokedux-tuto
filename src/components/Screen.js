import React from "react";
import { connect } from 'react-redux'


const Screen = ({ pokemons, onScreen }) => {
  // onScreen's isCaught attribute is never updated, that's why I need to
  // check isCaught in the pokemons object, using onScreen.id - 1 as the key
  // (because id starts at 1 whereas the key starts at 0)
  if (onScreen && onScreen.id) {
    console.log(`Screen: onScreen.name=${onScreen.name}`)

    const imgSrc = pokemons[onScreen.id - 1].isCaught
      ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      : onScreen.img
    return (
      <>
        <h3 className='screen-name'>{onScreen.name}</h3>
        <img
          alt={onScreen.name}
          src={
            imgSrc
          }
        />
      </>
    )
  }
  else {
    return (
      <>
        <div className="screen-logo">GAME BOY</div>
        <div className="screen-logo-shadow">GAME BOY</div>
        <div className="nintendo-logo-screen">Nintendo&reg;</div>
      </>
    )
  }
};

const mapStateToProps = ({ pokemons, onScreen }) => {
  return ({
    pokemons,
    onScreen
  })
}

// 2. la connexion entre store/actions et les props se fait dans l'export ainsi
// export default App
export default connect(mapStateToProps, null)(Screen);

//export default Screen;
