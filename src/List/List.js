import React, { useState, useEffect } from 'react';
import './List.css';
import PokemonCard from '../PokemonCard/PokemonCard';

function List({ onPokemonClick, selectedGeneration }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const fetchPokemon = (generation) => {
    const generationMap = {
      All: [1, 1025],
      Kanto: [1, 151],
      Johto: [152, 251],
      Hoenn: [252, 386],
      Sinnoh: [387, 493],
      Unova: [494, 649],
      Kalos: [650, 721],
      Alola: [722, 809],
      Galar: [810, 905],
      Paldea: [906, 1025]
    };

    const [start, end] = generationMap[generation];
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${end - start + 1}&offset=${start - 1}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then(async (data) => {
        const promises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonDetails = await response.json();
          return {
            sprite: pokemonDetails.sprites.front_default,
            name: pokemonDetails.name,
            types: pokemonDetails.types.map((type) => type.type.name),
            abilities: pokemonDetails.abilities.map((ability) => ({
              name: ability.ability.name,
              isHidden: ability.is_hidden,
            })),
            stats: pokemonDetails.stats.map((stat) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            })),
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
    fetchPokemon(selectedGeneration);
  }, [selectedGeneration]);

  const handlePokemonClick = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`);
    const pokemonDetails = await response.json();
    setSelectedPokemon(pokemonDetails);
  
    // Check if onPokemonClick is defined before calling it
    onPokemonClick && onPokemonClick(pokemonDetails);
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