import React, { useState } from 'react';
import './App.css';
import List from '../List/List';
import PokemonCard from '../PokemonCard/PokemonCard';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemonDetails) => {
    setSelectedPokemon(pokemonDetails);
  };

  const handleCloseCard = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PokéLex</h1>
      </header>
      <div className="main-container">
        <div className="pokemon-details">
          <h2></h2>
          {selectedPokemon && <PokemonCard pokemon={selectedPokemon} onClose={handleCloseCard} />}
        </div>
        <div className="list-container">
          <List onPokemonClick={handlePokemonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;