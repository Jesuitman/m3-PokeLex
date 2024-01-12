import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import '../styles.css'; // Import the CSS file
import List from '../List/List';
import PokemonCard from '../PokemonCard/PokemonCard';
import TeamDisplay from '../TeamDisplay/TeamDisplay';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));
  const [selectedGeneration, setSelectedGeneration] = useState('All');

  const handlePokemonClick = (pokemonDetails) => {
    setSelectedPokemon(pokemonDetails);
  };

  const handleAddToTeam = (selectedPokemon) => {
    if (selectedPokemon) {
      const updatedTeam = [...team];
      const emptySlotIndex = updatedTeam.findIndex((p) => p === null);
      if (emptySlotIndex !== -1) {
        updatedTeam[emptySlotIndex] = selectedPokemon;
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

  const handleGenerationChange = (generation) => {
    setSelectedGeneration(generation);
  };


  return (
    <div className="App">
      <header className="App-header">
        <button className='gen-button'>Teams</button>
        <h1>PokéLex</h1>
        {['All', 'Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'].map((generation) => (
          <button
            key={generation}
            className='gen-button'
            onClick={() => handleGenerationChange(generation)}
          >
            {generation}
          </button>
        ))}
      </header>
      <div className="main-container">
        <div className="list-container">
          <List onPokemonClick={handlePokemonClick} selectedGeneration={selectedGeneration} />
        </div>
        <div className='team-container'>
          <button className='gen-button' onClick={() => handleAddToTeam(selectedPokemon)}>Add to Team</button>
          <TeamDisplay team={team} handleRemoveFromTeam={handleRemoveFromTeam} />
        </div>
      </div>
    </div>
  );
}

export default App;


// make it so you clearyour team when you export it and an optiuon to clear whole team

//hamburger menu with create custom team and creat team buttons