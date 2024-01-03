import { useState } from 'react';

export default function App() {
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
    </div>
  );
}
