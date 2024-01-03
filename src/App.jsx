import { useState } from 'react';

export default function App() {
  // Game Logic - Cards
  const defaultCards = [
    {
      nome: 'paulo',
      isClicked: false,
      id: 214,
    },
    {
      nome: 'viviane',
      isClicked: false,
      id: 455,
    },
    {
      nome: 'brian',
      isClicked: false,
      id: 995,
    },
    {
      nome: 'bea',
      isClicked: false,
      id: 222,
    },
  ];

  const [cards, setCards] = useState(defaultCards);

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
    </div>
  );
}
