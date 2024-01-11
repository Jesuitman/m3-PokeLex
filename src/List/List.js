import React, { useState, useEffect } from 'react';
import './List.css'; // Import your CSS file
import PokemonCard from '../PokemonCard/PokemonCard';

function List({ onPokemonClick }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon    ] = useState(null);

  const fetchAllPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=1025')
      .then((response) => response.json())
      .then(async (data) => {
        const promises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonDetails = await response.json();
          return {
            sprite: pokemonDetails.sprites.front_default,
          };
        });
        const pokemonDetails = await Promise.all(promises);
        setPokemonData(pokemonDetails);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
      });
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const handlePokemonClick = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
    const pokemonDetails = await response.json();
    setSelectedPokemon(pokemonDetails);
    onPokemonClick(pokemonDetails); // Pass the selected Pokemon details to the App component
  };

  const handleCloseCard = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="list-container">
      <div className="pokemon-grid">
        {pokemonData.map((pokemon, index) => (
          <button  
            key={index}
            className="pokemon-button"
            onClick={() => handlePokemonClick(index)}
          >
            {pokemon.sprite && <img src={pokemon.sprite} alt={`Pokemon ${index}`} />}
          </button>
        ))}
      </div>
      {selectedPokemon && (
        <div className="pokemon-details">
          <PokemonCard pokemon={selectedPokemon} onClose={handleCloseCard} />
        </div>
      )}
    </div>
  );
}

export default List;