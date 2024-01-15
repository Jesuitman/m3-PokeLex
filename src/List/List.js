import React, { useState, useEffect } from 'react';
import './List.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import fetchKantoPokemon from "../Generations/Kanto"
import fetchJohtoPokemon from "../Generations/Johto"
import fetchHoennPokemon from "../Generations/Hoenn"
import fetchSinnohPokemon from "../Generations/Sinnoh"
import fetchUnovaPokemon from "../Generations/Unova"
import fetchKalosPokemon from "../Generations/Kalos"
import fetchAlolaPokemon from "../Generations/Alola"
import fetchGalarPokemon from "../Generations/Galar"
import fetchPaldeaPokemon from "../Generations/Paldea"
import fetchAllPokemon from "../Generations/All"

function List({ onPokemonClick, selectedGeneration }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedGeneration === 'Kanto') {
        const kantoPokemon = await fetchKantoPokemon();
        setPokemonData(kantoPokemon);
      } else if (selectedGeneration === 'Johto') {
        const johtoPokemon = await fetchJohtoPokemon();
        setPokemonData(johtoPokemon);
      } else if (selectedGeneration === 'Hoenn') {
        const hoennPokemon = await fetchHoennPokemon();
        setPokemonData(hoennPokemon);
      } else if (selectedGeneration === 'Sinnoh') {
        const sinnohPokemon = await fetchSinnohPokemon();
        setPokemonData(sinnohPokemon);
      } else if (selectedGeneration === 'Unova') {
        const unovaPokemon = await fetchUnovaPokemon();
        setPokemonData(unovaPokemon);
      } else if (selectedGeneration === 'Kalos') {
        const kalosPokemon = await fetchKalosPokemon();
        setPokemonData(kalosPokemon);
      } else if (selectedGeneration === 'Alola') {
        const alolaPokemon = await fetchAlolaPokemon();
        setPokemonData(alolaPokemon);
      } else if (selectedGeneration === 'Galar') {
        const galarPokemon = await fetchGalarPokemon();
        setPokemonData(galarPokemon);
      } else if (selectedGeneration === 'Paldea') {
        const paldeaPokemon = await fetchPaldeaPokemon();
        setPokemonData(paldeaPokemon);
      } else {
        const allPokemon = await fetchAllPokemon()
        setPokemonData(allPokemon)
      }
    };
    fetchData();
  }, [selectedGeneration]);

  const handlePokemonClick = async (index) => {
    const pokemonDetails = pokemonData[index];
    setSelectedPokemon(pokemonDetails);

    // Check if onPokemonClick is defined before calling it
    onPokemonClick && onPokemonClick(pokemonDetails);
  };


  const handleCloseCard = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="list-container">
      {pokemonData.length === 0 && (
        <div className="loading-message">
          Compiling the PokeLex, just a moment...
        </div>)}
      <div className="pokemon-grid">
        {pokemonData.map((pokemon, index) => (
          <button
            key={index}
            className="pokemon-button"
            onClick={() => handlePokemonClick(index)}
          >
            {pokemon.sprite && <img src={pokemon.sprite} alt={`Pokemon ${pokemon.name}`} />}
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