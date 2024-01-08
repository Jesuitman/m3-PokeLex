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
        {/* Your existing header content */}
      </header>
      <List onPokemonClick={handlePokemonClick} />
      {selectedPokemon && (
        <div className="pokemon-details">
          <PokemonCard pokemon={selectedPokemon} onClose={handleCloseCard} />
        </div>
      )}
    </div>
  );
}

export default App;