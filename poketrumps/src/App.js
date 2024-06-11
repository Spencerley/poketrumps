import './App.css';
import { useEffect, useState } from 'react';
import Battle from './pages/Battle';

function App() {

  // states for name, attack, defense, hp, speed and image - how will image be stored? image is "sprites" {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
  // could set the state as {pokemonName: '', attack: '', defense: '', hp: '', speed: '', image: ''}?
  const [userPokemon, setUserPokemon] = useState({pokemonName: '', attack: '', defense: '', hp: '', speed: '', image: ''});
  const [computerPokemon, setComputerPokemon] = useState({pokemonName: '', attack: '', defense: '', hp: '', speed: '', image: ''});
  const [inputValue, setInputValue] = useState('');

  // input field for name of pokemon
  function handleInputValue(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  // button to fetch pokemon based on name input

  // GET api call to fetch pokemon - https://pokeapi.co/api/v2/pokemon/{pokemonname}
  
  // api call to fetch random pokemon - https://pokeapi.co/api/v2/pokemon/{randomnumber}

  // useEffect to fetch and set data from the API - based on a name input or a random button(id of pokemon)

  // onClick function to compare the stats of the two cards based on the selected stat

  // store outcome details in database for past battles page
    // write to user past battles database
    // write to computer past battles database
    // could this be one database with a column for user and computer?

  return (
    <><div className="App">
      <header className="App-header">
        <h1>
          PokeTrumps
        </h1>
      </header>
      <div>
        <input type="text"
          className="emptyListInput"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Enter Pokemon Name">
        </input>
        <button>Fetch Pokemon</button>
        <button>Random Pokemon</button>
      </div>
    </div><Battle {...{computerPokemon, userPokemon}}/>
    </>
  );
}

export default App;