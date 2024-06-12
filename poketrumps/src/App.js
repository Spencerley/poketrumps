import './App.css';
import React from 'react';
import { useState } from 'react';
import Battle from './pages/Battle';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  // states for name, attack, defense, hp, speed and image - how will image be stored? image is "sprites" {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
  // could set the state as {pokemonName: '', attack: '', defense: '', hp: '', speed: '', image: ''}?
  const [userPokemon, setUserPokemon] = useState({pokemonName: '', attack: '', defense: '', hp: '', speed: '', image: ''});
  const [computerPokemon, setComputerPokemon] = useState({pokemonName: '', attack: '', defense: '', hp: '', speed: '', image: ''});
  const [inputValue, setInputValue] = useState('');
  const compRandom = Math.floor(Math.random() * 1025) + 1;
  const userRandom = Math.floor(Math.random() * 1025) + 1;
  const navigate = useNavigate();

  // input field for name of pokemon
  function handleInputValue(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  // button to fetch pokemon based on name input

  // GET api call to fetch pokemon - https://pokeapi.co/api/v2/pokemon/{pokemonname}

  // set api details

  function handleFetchPokemon(){
    console.log(inputValue, compRandom);
    setInputValue(inputValue.toLowerCase().trim());
    const fetchPokemon = async () => {
      if (inputValue && compRandom) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
          const data = await response.json();
          const name = data.name;
          const attack = data.stats[1].base_stat;
          const defense = data.stats[2].base_stat;
          const hp = data.stats[0].base_stat;
          const speed = data.stats[5].base_stat;
          const image = data.sprites.front_default;
          setUserPokemon({ pokemonName: name, attack: attack, defense: defense, hp: hp, speed: speed, image: image });
          console.log(userPokemon);
          const compResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${compRandom}`);
          const compData = await compResponse.json();
          const compName = compData.name;
          const compAttack = compData.stats[1].base_stat;
          const compdefense = compData.stats[2].base_stat;
          const compHp = compData.stats[0].base_stat;
          const compSpeed = compData.stats[5].base_stat;
          const compimage = compData.sprites.front_default;
          setComputerPokemon({ pokemonName: compName, attack: compAttack, defense: compdefense, hp: compHp, speed: compSpeed, image: compimage });
          console.log(userPokemon);
          navigate('/battle');
        } catch (error) {
          console.error('Error fetching pokemon:', error);
        }
      }
    };
    fetchPokemon();
  }
  
  // api call to fetch random pokemon - https://pokeapi.co/api/v2/pokemon/{randomnumber}

  function handleFetchRandomPokemon(){
    const fetchPokemon = async () => {
      if (userRandom && compRandom) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userRandom}`);
          const data = await response.json();
          const name = data.name;
          const attack = data.stats[1].base_stat;
          const defense = data.stats[2].base_stat;
          const hp = data.stats[0].base_stat;
          const speed = data.stats[5].base_stat;
          const image = data.sprites.front_default;
          setUserPokemon({ pokemonName: name, attack: attack, defense: defense, hp: hp, speed: speed, image: image });
          console.log(userPokemon);
          const compResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${compRandom}`);
          const compData = await compResponse.json();
          const compName = compData.name;
          const compAttack = compData.stats[1].base_stat;
          const compdefense = compData.stats[2].base_stat;
          const compHp = compData.stats[0].base_stat;
          const compSpeed = compData.stats[5].base_stat;
          const compimage = compData.sprites.front_default;
          setComputerPokemon({ pokemonName: compName, attack: compAttack, defense: compdefense, hp: compHp, speed: compSpeed, image: compimage });
          console.log(userPokemon);
          navigate('/battle');
        } catch (error) {
          console.error('Error fetching pokemon:', error);
        }
      }
    };
    fetchPokemon();
  }


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
        <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
        <button onClick={handleFetchRandomPokemon}>Random Pokemon</button>
      </div>
    </div>
    <Routes>
    <Route path="/battle" element={<Battle userPokemon={userPokemon} computerPokemon={computerPokemon}/>}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
