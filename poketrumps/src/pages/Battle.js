import React from 'react';
import userPokemon from './App';
import computerPokemon from './App';



export default function Battle() {
    return (
        <>
        <div className='battle'>
        <div className='userCard'>
          <h2>{userPokemon.pokemonName}</h2>
          <img src={userPokemon.image} alt='pokemon'/>
          <p>Attack: {userPokemon.attack}</p>
          <p>Defense: {userPokemon.defense}</p>
          <p>HP: {userPokemon.hp}</p>
          <p>Speed: {userPokemon.speed}</p>
          </div>
        <div className='computerCard'>
          <h2>{computerPokemon.name}</h2>
          <img src={computerPokemon.image} alt='pokemon'/>
          <p>Attack: {computerPokemon.attack}</p>
          <p>Defense: {computerPokemon.defense}</p>
          <p>HP: {computerPokemon.hp}</p>
          <p>Speed: {computerPokemon.speed}</p>
          </div>
          </div>
        </>
    )
}