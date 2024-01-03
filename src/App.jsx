// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import Pokemons from './Pokemons';

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

  let gameIsOver = false;

  function setGameOver() {
    console.log('you lost');
  }

  // Game Logic - Scores
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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

  return (
    <div>
      <button onClick={() => incrementScore()}>EE</button>
      {bestScore}

      <button onClick={() => clickCard(214)}>Cards!!!</button>
      {console.log(cards)}
      <pre>{JSON.stringify(cards)}</pre>
      <Pokemons
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}
