import React from "react";
import "../battle.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Battle({ userPokemon, computerPokemon, inputEmpty}) {
  let userStat = [userPokemon.attack, userPokemon.defense, userPokemon.hp, userPokemon.speed];
  let computerStat = [computerPokemon.attack, computerPokemon.defense, computerPokemon.hp, computerPokemon.speed];
  const [showComputerCard, setShowComputerCard] = useState(false);
  const [winner, setWinner] = useState('');
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [attack, setAttack] = useState(false);
  const [defense, setDefense] = useState(false);
  const [hp, setHp] = useState(false);
  const [speed, setSpeed] = useState(false);

  const compareStat = (userStatIndex, computerStatIndex, setter) => {
    if (userStat[userStatIndex] > computerStat[computerStatIndex]) {
      setWinner("User wins");
    } else if (userStat[userStatIndex] === computerStat[computerStatIndex]) {
      setWinner("It's a draw");
    } else {
      setWinner("Computer wins");
    }
    setter(true);
    console.log("User stat:", userStat[userStatIndex], "Computer stat:", computerStat[computerStatIndex])
  };

  const handleCompareStats = (statIndex) => {
    setShowComputerCard(true);
    const statMap = {
      0: { userStatIndex: 0, setter: setAttack },
      1: { userStatIndex: 1, setter: setDefense },
      2: { userStatIndex: 2, setter: setHp },
      3: { userStatIndex: 3, setter: setSpeed },
    };
    if (statIndex in statMap) {
      const { userStatIndex, setter } = statMap[statIndex];
      compareStat(userStatIndex, statIndex, setter);
    }
    setTimeout(() => {
      setShowPlayAgain(true);
    }, 3000);
  };


  return (
    <>
      <div className="battle">
        <div className="userCard">
          <h2>{userPokemon.pokemonName}</h2>
          <img src={userPokemon.image} alt="pokemon" />
          <div className="Stats">
          <p className={ attack ? "highlight" : ""} onClick={() => handleCompareStats(0)}> Attack: {userStat[0]}</p>
          <p className={ defense ? "highlight" : ""} onClick={() => handleCompareStats(1)}>Defense: {userStat[1]}</p>
          <p className={ hp ? "highlight" : ""} onClick={() => handleCompareStats(2)}>HP: {userStat[2]}</p>
          <p className={ speed ? "highlight" : ""} onClick={() => handleCompareStats(3)}>Speed: {userStat[3]}</p>
          </div>
        </div>
        {showComputerCard ? (
        <div className="computerCard">
          <h2>{computerPokemon.pokemonName}</h2>
          <img src={computerPokemon.image} alt="pokemon" />
          <div className="Stats">
          <p className={ attack ? "highlight" : ""}>Attack: {computerPokemon.attack}</p>
          <p className={ defense ? "highlight" : ""}>Defense: {computerPokemon.defense}</p>
          <p className={ hp ? "highlight" : ""}>HP: {computerPokemon.hp}</p>
          <p className={ speed ? "highlight" : ""}>Speed: {computerPokemon.speed}</p>
          </div>
        </div>) : (
          <div className="computerCardBack">Pick your Stat!</div>
        )}
      </div>
      {showPlayAgain && (
        <div className="playAgain"> 
        <p>{winner}</p>
      <Link to='/'><button className="playButton" onClick={inputEmpty}>Play Again</button></Link>
      </div>
      )}
    </>
  );
}
