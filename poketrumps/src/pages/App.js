import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';

function App() {

  // states for name, attack, defense, hp, speed and image - how will image be stored?
  let [pokemonName, setPokemonName] = useState('');
  let [attack, setAttack] = useState('');
  let [defense, setDefense] = useState('');
  let [hp, setHp] = useState('');
  let [speed, setSpeed] = useState('');
  let [image, setImage] = useState(''); 

  // api call to fetch pokemon - https://pokeapi.co/api/v2/pokemon/{pokemonname}
  // api call to fetch random pokemon - https://pokeapi.co/api/v2/pokemon/{randomnumber}

  // useEffect to fetch and set data from the API - based on a name input or a random button(id of pokemon)

  // onClick function to compare the stats of the two cards based on the selected stat

  // store outcome details in database for past battles page
    // write to user past battles database
    // write to computer past battles database
    // could this be one database with a column for user and computer?

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
