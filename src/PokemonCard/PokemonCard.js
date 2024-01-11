import React, { useState } from 'react'; // Import useState if not already imported
import './PokemonCard.css';

function PokemonCard({ pokemon, onClose }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="pokemon-details">
            <button className="close-button" onClick={onClose}>
        <span role="img" aria-label="Close">&#10060;</span>
      </button>
      <div className="sprite-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-sprite" />
      </div>
      <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
      <p>Type: {pokemon.types.map((type) => capitalizeFirstLetter(type.type.name)).join(', ')}</p>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map((ability, index) => (<li key={index}>{capitalizeFirstLetter(ability.ability.name)} {ability.is_hidden && '(Hidden)'}</li>))}
      </ul>
      <ul>
        {pokemon.stats.map((stat, index) => (<li key={index}>{capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}</li>))}
      </ul>
      <button className="gen-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default PokemonCard;