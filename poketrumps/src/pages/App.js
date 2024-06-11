import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // states for name, attack, defense, hp, speed and image

  // useEffect to fetch data from the API - based on a name input or a random button(id of pokemon)

  // onClick function to compare the stats of the two cards based on the selected stat

  // store outcome details in database for past battles page

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
