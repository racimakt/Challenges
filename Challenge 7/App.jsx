import React, { useState } from "react";

const choices = ["rock", "paper", "scissors"];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {userChoice && (
        <div className="result-display">
          <p>
            Your choice: <strong>{userChoice}</strong>
          </p>
          <p>
            Computer's choice: <strong>{computerChoice}</strong>
          </p>
          <h2 className="result-message">{result}</h2>
        </div>
      )}

      <button className="reset-btn" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default App;
