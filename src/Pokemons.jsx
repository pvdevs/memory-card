/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function Pokemons() {
  const basePokemons = ['pikachu', 'ditto', 'snorlax'];
  const [pokemons, setPokemons] = useState([]);

  function usePokemonsAPI(pokemonName) {
    useEffect(() => {
      async function loadPokemon() {
        const pokemonsData = await Promise.all(
          basePokemons.map(async (pokemonName) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            const pokemon = await response.json();
            return {
              name: pokemon.name,
              id: pokemon.id,
              sprite: pokemon.sprites.front_default,
              isClicked: false,
            };
          })
        );
        setPokemons(pokemonsData);
      }
      loadPokemon();
      console.log(pokemons);
      return;
    }, [pokemonName]);
  }

  usePokemonsAPI('pikachu');
  usePokemonsAPI('ditto');
  usePokemonsAPI('snorlax');

  const pokemonsList = pokemons.map((pokemon) => {
    return (
      <div key={pokemon.id}>
        <h1>{pokemon.name}</h1>
        <h1>{pokemon.id}</h1>
        <img src={pokemon.sprite} alt="" />
      </div>
    );
  });

  if (pokemons.length === 0) {
    return <div>loading...</div>;
  }
  return <>{pokemonsList}</>;
}
