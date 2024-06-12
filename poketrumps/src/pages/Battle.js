import React from "react";
import "../battle.css";
import playAgain from "../components/play_again";
import { useEffect, useState } from "react";


export default function Battle({ userPokemon, computerPokemon}) {
  const [userStat, setUserStat] = useState();
  const [computerStat, setComputerStat] = useState(null);
  const [result, setResult] = useState(null);
  const [playAgain, setPlayAgain] = useState(null);

  // allow user to select a stat to compare with computer
  // store the user's selected stat
  // store corresponding computer stat
  // compare the two stats
  // store the result of the comparison
  // display the result of the comparison
  // allow user to play again once the game is over
  // store the result of the game in the database

  return (
    <>
      <div className="battle">
        <div className="userCard">
          <h2>{userPokemon.pokemonName}</h2>
          <img src={userPokemon.image} alt="pokemon" />
          <p className="attack">Attack: {userPokemon.attack}</p>
          <p>Defense: {userPokemon.defense}</p>
          <p>HP: {userPokemon.hp}</p>
          <p>Speed: {userPokemon.speed}</p>
        </div>
        <div className="computerCard"  /* conditionally render "computer card" only if user has selected a stat */>
          <h2>{computerPokemon.pokemonName}</h2>
          <img src={computerPokemon.image} alt="pokemon" />
          <p>Attack: {computerPokemon.attack}</p>
          <p>Defense: {computerPokemon.defense}</p>
          <p>HP: {computerPokemon.hp}</p>
          <p>Speed: {computerPokemon.speed}</p>
        </div>
      </div>
    </>
  );
}
