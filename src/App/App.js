import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import List from '../List/List';
import PokemonCard from '../PokemonCard/PokemonCard';
import TeamDisplay from '../TeamDisplay/TeamDisplay';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));
  const [selectedGeneration, setSelectedGeneration] = useState('Kanto');

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
    setSelectedGeneration(generation.toLowerCase());
  };
  

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>PokéLex</h1>
          <Routes>
            {['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'].map((generation) => (
              <Route
                key={generation}
                path={`/${generation.toLowerCase()}`}
                element={
                  <Link to={`/${generation.toLowerCase()}`} className='gen-button' onClick={() => handleGenerationChange(generation)}>{generation}</Link>
                }
              />
            ))}
          </Routes>
        </header>
        <div className="main-container">
          <Routes>
            <Route
              path={`/:generation`}
              element={
                <div className="list-container">
                  <button className='gen-button' onClick={() => handleAddToTeam(selectedPokemon)}>Add to Team</button>
                  <List onPokemonClick={handlePokemonClick} selectedGeneration={selectedGeneration} />
                </div>
              }
            />
          </Routes>
          <TeamDisplay team={team} handleRemoveFromTeam={handleRemoveFromTeam} />
        </div>
      </div>
    </Router>
  );
}

export default App;



// make it so you clearyour team when you export it and an optiuon to clear whole team

//hamburger menu with create custom team and creat team buttons