import React from 'react';
import pokemonName from './App';
import image from './App'; 
import attack from './App';
import defense from './App';
import hp from './App';
import speed from './App';
import computerAttack from './App';
import computerDefense from './App';
import computerHp from './App';
import computerImage from './App';
import computerPokemonName from './App';
import computerSpeed from './App';


export default function Battle() {
    return (
        <>
        <div className='battle'>
        <div className='userCard'>
          <h2>{pokemonName}</h2>
          <img src={image} alt='pokemon'/>
          <p>Attack: {attack}</p>
          <p>Defense: {defense}</p>
          <p>HP: {hp}</p>
          <p>Speed: {speed}</p>
          </div>
        <div className='computerCard'>
          <h2>{computerPokemonName}</h2>
          <img src={computerImage} alt='pokemon'/>
          <p>Attack: {computerAttack}</p>
          <p>Defense: {computerDefense}</p>
          <p>HP: {computerHp}</p>
          <p>Speed: {computerSpeed}</p>
          </div>
          </div>
        </>
    )
}