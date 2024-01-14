import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import './App.css';
import '../styles.css'; // Import the CSS file
import List from '../List/List';
import PokemonCard from '../PokemonCard/PokemonCard';
import TeamDisplay from '../TeamDisplay/TeamDisplay';
import TeamManager from '../TeamManager/TeamManager';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));
  const [selectedGeneration, setSelectedGeneration] = useState('All');
  const [exportedTeam, setExportedTeam] = useState([]);
  const [teamLinkClicked, setTeamLinkClicked] = useState(false);
  const generations = ['All', 'Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea'];

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

  const handleHomeClick = () => {
    handleGenerationChange('All');
    setTeamLinkClicked(false);
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
    // This component will display the TeamManager content
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
          <Link to="/">Home</Link>
          <Link to="/teams">Teams</Link>
          <h1>PokéLex</h1>
          {generations.map((generation) => (
            <Link
              key={generation}
              to={`/${generation.toLowerCase()}`}
              className='gen-button'
              onClick={() => handleGenerationChange(generation)}
            >
              {generation}
            </Link>
          ))}
        </header>
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={
                <div className='main-container'>
                  <List onPokemonClick={handlePokemonClick} selectedGeneration={selectedGeneration} />
                  <div className='team-container'>
                    <button className='gen-button' onClick={() => handleAddToTeam(selectedPokemon)}>Add to Team</button>
                    <TeamDisplay team={team} handleRemoveFromTeam={handleRemoveFromTeam} exportTeam={exportTeam} />
                  </div>
                </div>
              }
            />
            <Route path="/teams" element={<TeamManagerPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
  
}

export default App;


// make it so you clearyour team when you export it and an optiuon to clear whole team

//hamburger menu with create custom team and creat team buttons