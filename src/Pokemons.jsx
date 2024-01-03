/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './pokemons.scss';

const basePokemons = ['pikachu', 'ditto', 'snorlax', 'eevee', 'mewtwo'];

export default function Pokemons({ score, setScore, bestScore, setBestScore }) {
  const [pokemons, setPokemons] = useState([]);

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
    return;
  }, []);

  function incrementScore() {
    // incrementScore
    const nextScore = score + 1;
    setScore(nextScore);
    checkIfBestScore(nextScore);
    console.log('ieist');
  }

  function checkIfBestScore(nextScore) {
    nextScore > bestScore ? setBestScore(nextScore) : null;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function sortPokemons() {
    const nextPokemons = [...pokemons];
    shuffle(nextPokemons);
    setPokemons(nextPokemons);
  }

  function clickPokemon(id) {
    setPokemons(
      pokemons.map((pokemon) => {
        if (pokemon.isClicked === true) {
          //setGameOver;
          console.log('gameIsOver');
          return;
        }
        if (pokemon.id === id) {
          incrementScore();
          return { ...pokemon, isClicked: true };
        } else {
          return pokemon;
        }
      })
    );
    sortPokemons();
  }

  //onClick={() => clickPokemon(pokemon.id)}
  const pokemonsList = pokemons.map((pokemon) => {
    return (
      <div
        className="pokemon"
        key={pokemon.id}
        onClick={() => clickPokemon(pokemon.id)}
      >
        <img src={pokemon.sprite} alt="" />
        <h1>{pokemon.name}</h1>
      </div>
    );
  });

  if (pokemons.length === 0) {
    return <div>loading...</div>;
  }
  return <div className="pokemons">{pokemonsList}</div>;
}
