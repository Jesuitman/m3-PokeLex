import React from 'react';
import './PokemonCard.css';


function PokemonCard({ pokemon, onClose }) {
  return (
    <div className="pokemon-details">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <button onClick={() => console.log("Add to team")}>
        Add to Team
      </button>
    </div>
  );
}

export default PokemonCard;