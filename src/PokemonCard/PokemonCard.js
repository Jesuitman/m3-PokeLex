import React from 'react';
import './PokemonCard.css';
import PropTypes from 'prop-types'


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
        {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-sprite" />}
      </div>
      <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
      <p>Type: {pokemon.types.map((type) => capitalizeFirstLetter(type)).join(', ')}</p>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>
            {capitalizeFirstLetter(ability.name)} {ability.isHidden && '(Hidden)'}
          </li>
        ))}
      </ul>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {capitalizeFirstLetter(stat.name)}: {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    sprite: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        isHidden: PropTypes.bool,
      })
    ),
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }).isRequired,
  onClose: PropTypes.func,
};