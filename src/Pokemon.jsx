/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function Pokemon({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      const connection = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const pokemon = await connection.json();
      setPokemon({
        name: pokemon.name,
        id: pokemon.id,
        sprite: pokemon.sprites.front_default,
        isClicked: false,
      });
    }
    loadPokemon();
  }, [pokemonName]);

  if (pokemon === null) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <pre>{JSON.stringify(pokemon)}</pre>
    </div>
  );
}
