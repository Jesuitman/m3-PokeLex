import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon, onClose }) {

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="pokemon-details">
      {pokemon ? (
        <>
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
          <button onClick={() => console.log("Add to team")}>
            Add to Team
          </button> 
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </>
      ) : (
        <p>Click a Pokémon to see details</p>
      )}
    </div>
  );
}

export default PokemonCard;

