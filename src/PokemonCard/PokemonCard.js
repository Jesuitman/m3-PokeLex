import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon, onClose }) {
  return (
    <div className="pokemon-card">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h3>{pokemon.name}</h3>
      <p>Ability: {pokemon.abilities[0].ability.name}</p>
      <p>Type: {pokemon.types[0].type.name}</p>
    </div>
  );
}

export default PokemonCard;