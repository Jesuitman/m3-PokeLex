import React from 'react';

const PokemonInfo = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />

      <h3>Abilities:</h3>
      <ul>
        {data.abilities.map((ability, index) => (
          <li key={index}>
            {ability.ability.name} - {ability.is_hidden ? 'Hidden' : 'Not Hidden'}
          </li>
        ))}
      </ul>

      <h3>Moves:</h3>
      <ul>
        {data.moves.map((move, index) => (
          <li key={index}>
            {move.move.name} - Level: {move.version_group_details[0].level_learned_at}
          </li>
        ))}
      </ul>

      <h3>Types:</h3>
      <ul>
        {data.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>

      <h3>Stats:</h3>
      <ul>
        {data.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;