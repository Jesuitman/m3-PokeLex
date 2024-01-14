const fetchJohtoPokemon = async () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151';
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      const promises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();
        const sprite = pokemonDetails.sprites.front_default;
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
      return pokemonDetails;
    } catch (error) {
      console.error('Error fetching Johto Pokémon data:', error);
      return [];
    }
  };
  
  export default fetchJohtoPokemon;