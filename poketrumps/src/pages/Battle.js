import React from "react";
import "../battle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Battle({ userPokemon, computerPokemon}) {
  let userStat = [userPokemon.attack, userPokemon.defense, userPokemon.hp, userPokemon.speed];
  let computerStat = [computerPokemon.attack, computerPokemon.defense, computerPokemon.hp, computerPokemon.speed];
  const [showComputerCard, setShowComputerCard] = useState(false);
  const navigate = useNavigate();
  const [winner, setWinner] = useState('');
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  // onClick function to compare the selected stats of the two cards based on the stat in the <p> tag
  // store the result of the comparison
  // display the result of the comparison
  const handleCompareStats = (statIndex) => {
    setShowComputerCard(true);
    // Implement logic to compare userStats[statIndex] with computerStats[statIndex]
    if (statIndex === 0) {
      if (userStat[0] > computerStat[0]) {
        setWinner("User wins");
      } else if (userStat[0] === computerStat[0]) {
        setWinner("It's a draw");
      } else {
        setWinner("Computer wins");
      }
    }
    else if (statIndex === 1) {
      if (userStat[1] > computerStat[1]) {
        setWinner("User wins");
      } else if (userStat[1] === computerStat[1]) {
        setWinner("It's a draw");
      }
      else {
        setWinner("Computer wins");
      }
    }
    else if (statIndex === 2) {
      if (userStat[2] > computerStat[2]) {
        setWinner("User wins");
      } else if (userStat[2] === computerStat[2]) {
        setWinner("It's a draw");
      } 
      else {
        setWinner("Computer wins");
      }
    }
    else if (statIndex === 3) {
      if (userStat[3] > computerStat[3]) {
        setWinner("User wins");
      } else if (userStat[3] === computerStat[3]) {
        setWinner("It's a draw");
      } 
      else {
        setWinner("Computer wins");
      }
    }
    // wait 5 seconds then setshowPlayagain
    setTimeout(() => {
      setShowPlayAgain(true);
    }, 5000);
    }

    function handlePlayAgain() {
      setShowComputerCard(false);
      navigate('/');
    }

  return (
    <>
      <div className="battle">
        <div className="userCard">
          <h2>{userPokemon.pokemonName}</h2>
          <img src={userPokemon.image} alt="pokemon" />
          <div className="Stats">
          <p className="attack" onClick={() => handleCompareStats(0)}> Attack: {userStat[0]}</p>
          <p onClick={() => handleCompareStats(1)}>Defense: {userStat[1]}</p>
          <p onClick={() => handleCompareStats(2)}>HP: {userStat[2]}</p>
          <p onClick={() => handleCompareStats(3)}>Speed: {userStat[3]}</p>
          </div>
        </div>
        {showComputerCard ? (
        <div className="computerCard">
          <h2>{computerPokemon.pokemonName}</h2>
          <img src={computerPokemon.image} alt="pokemon" />
          <div className="Stats">
          <p>Attack: {computerPokemon.attack}</p>
          <p>Defense: {computerPokemon.defense}</p>
          <p>HP: {computerPokemon.hp}</p>
          <p>Speed: {computerPokemon.speed}</p>
          </div>
        </div>) : (
          <div className="computerCardBack">Pick your Stat!</div>
        )}
      </div>
      {/* conditionally render "Play Again" button only if user has selected a stat and 10 seconds have passed */}
      {showPlayAgain && (
        <div className="playAgain"> 
        <p>{winner}</p>
      <button className="playButton" onClick={handlePlayAgain}>Play Again</button>
      </div>
      )}
    </>
  );
}
