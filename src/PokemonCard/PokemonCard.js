import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon, onClose, handleAddToTeam }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleClose = () => {
    console.log('Closing card...'); // Add this log for debugging
    onClose();
  };

  const handleAdd = () => {
    console.log('Adding to team...');
    handleAddToTeam(); // Pass the selectedPokemon to the handleAddToTeam function
  };

  return (
    <div className="pokemon-details">
      <div className="sprite-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-sprite" />
      </div>
      <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
      <p>Type: {pokemon.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ')}</p>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{capitalizeFirstLetter(ability.ability.name)}</li>
        ))}
      </ul>
      <button className="gen-button" onClick={handleAdd}>Add to Team</button>
      <button className="gen-button" onClick={handleClose}>Close</button>
    </div>
  );
}

export default PokemonCard;
