import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import './App.css';
import '../styles.css'; // Import the CSS file
import List from '../List/List';
import TeamDisplay from '../TeamDisplay/TeamDisplay';
import TeamManager from '../TeamManager/TeamManager';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));
  const [selectedGeneration, setSelectedGeneration] = useState('All');
  const [exportedTeam, setExportedTeam] = useState([]);
  const generations = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

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
      } else {
        alert('Your team is full. Remove a Pokemon to add a new one.');
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

  const exportTeam = () => {
    const nullPositions = team.filter(member => member === null).length;
    
    if (nullPositions > 0) {
      const confirmExport = window.confirm(`You still have ${nullPositions} empty spaces on your team. Are you sure you want to export?`);
      
      if (!confirmExport) {
        return;
      }
    }

    const exported = team.filter(member => member !== null);
    setExportedTeam(exported);
    alert("Team exported!");
  };

  function TeamManagerPage() {
    return (
      <div>
        <TeamManager exportedTeam={exportedTeam}/>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
      <header className="App-header">
          <Link to="/teams" className='gen-button'>Teams</Link>
          <Link to="/" onClick={() => handleGenerationChange('All')}> <h1>PokéLex</h1></Link>
          {generations.map((generation) => (
            <Link key={generation} to={`/${generation.toLowerCase()}`} className='gen-button' onClick={() => handleGenerationChange(generation)}>
              {generation}
            </Link>
          ))}
        </header>
        <div className="main-container">
          <Routes>
            <Route path="/teams" element={<TeamManagerPage />} />
            <Route path="/" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="All" />} />
            <Route path="/kanto" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Kanto" />} />
            <Route path="/johto" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Johto" />} />
            <Route path="/hoenn" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Hoenn" />} />
            <Route path="/sinnoh" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Sinnoh" />} />
            <Route path="/unova" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Unova" />} />
            <Route path="/kalos" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Kalos" />} />
            <Route path="/alola" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Alola" />} />
            <Route path="/galar" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Galar" />} />
            <Route path="/paldea" element={<List onPokemonClick={handlePokemonClick} selectedGeneration="Paldea" />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          <div className='team-container'>
            <button className='gen-button' onClick={() => handleAddToTeam(selectedPokemon)}>Add to Team</button>
            <TeamDisplay team={team} handleRemoveFromTeam={handleRemoveFromTeam} exportTeam={exportTeam} />
          </div>
        </div>
      </div>
    </Router>
  );
  
}

export default App;

App.propTypes = {
  selectedPokemon: PropTypes.object,
  team: PropTypes.array,
  selectedGeneration: PropTypes.string,
  exportedTeam: PropTypes.array,
  onPokemonClick: PropTypes.func,
  handleGenerationChange: PropTypes.func,
};
