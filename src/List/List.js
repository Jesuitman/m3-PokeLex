import React, { useState, useEffect } from 'react';

function List() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon data:', error);
      });
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div>
      <h2>List of Pokémon</h2>
      <ul>
        {pokemonList.map((pokemonName, index) => (
          <li key={index}>{pokemonName}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;