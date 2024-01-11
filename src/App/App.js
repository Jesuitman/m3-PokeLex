import React, { useState } from 'react';
import './App.css';
import List from '../List/List';
import PokemonCard from '../PokemonCard/PokemonCard';
import TeamDisplay from '../TeamDisplay/TeamDisplay';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));

  const handlePokemonClick = (pokemonDetails) => {
    setSelectedPokemon(pokemonDetails);
  };

  const handleCloseCard = () => {
    setSelectedPokemon(null);
  };

  const handleAddToTeam = (pokemon) => {
    if (pokemon) {
      const updatedTeam = [...team];
      const emptySlotIndex = updatedTeam.findIndex((p) => p === null);
      if (emptySlotIndex !== -1) {
        updatedTeam[emptySlotIndex] = pokemon;
        setTeam(updatedTeam);
        console.log(updatedTeam);
      } else {
        console.log('Your team is full. Remove a Pokemon to add a new one.');
      }
    }
  };

  const handleRemoveFromTeam = (index) => {
    const updatedTeam = [...team];
    updatedTeam[index] = null;
    setTeam(updatedTeam);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PokéLex</h1>
        <button className='gen-button'>Kanto</button>
        <button className='gen-button'>Johto</button>
        <button className='gen-button'>Hoenn</button>
        <button className='gen-button'>Sinnoh</button>
        <button className='gen-button'>Unova</button>
        <button className='gen-button'>Kalos</button>
        <button className='gen-button'>Alola</button>
        <button className='gen-button'>Galar</button>
        <button className='gen-button'>Paldea</button>
        </header>
      <div className="main-container">
        <div className="pokemon-details">
          {selectedPokemon && (
            <PokemonCard pokemon={selectedPokemon} onClose={handleCloseCard} handleAddToTeam={handleAddToTeam} />
          )}
        </div>
        <div className="list-container">
          <List onPokemonClick={handlePokemonClick} />
        </div>
        <TeamDisplay team={team} handleRemoveFromTeam={handleRemoveFromTeam} />
      </div>
    </div>
  );
}

export default App;