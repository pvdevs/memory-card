// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

export default function App() {
  // Game Logic - Cards

  //https://pokeapi.co/api/v2/

  const [cards, setCards] = useState();

  function clickCard(id) {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          return { ...card, isClicked: true };
        } else {
          return card;
        }
      })
    );
  }

  // Game Logic - Scores
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function checkIfBestScore() {
    // incrementScore
    const nextScore = score + 1;
    setScore(nextScore);

    nextScore > bestScore ? setBestScore(nextScore) : null;

    console.log(nextScore);
  }

  return (
    <div>
      <button onClick={() => checkIfBestScore(1)}>EE</button>
      {bestScore}

      <button onClick={() => clickCard(214)}>Cards!!!</button>
      {console.log(cards)}
      <pre>{JSON.stringify(cards)}</pre>
      <Pokemon pokemonName={'ditto'} />
    </div>
  );
}
