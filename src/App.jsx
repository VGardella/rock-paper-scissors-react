import './App.css'
import { useState, useEffect } from 'react';
import ChoiceButton from './components/buttons/choiceButton';
import ResultsScreen from './components/result-screen/resultsScreen';
import RestartButton from './components/buttons/restartButton';

export default function App() {
  const [ playerChoice, setPlayerChoice ] = useState(null);
  const [ computerChoice, setComputerChoice ] = useState(null);
  const [ playerCounter, setPlayerCounter ] = useState(0);
  const [ computerCounter, setComputerCounter ] = useState(0);
  const [ winner, setWinner ] = useState(null);

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  function handleChoice(e) {
    setPlayerChoice(e.currentTarget.id);
    setComputerChoice(getComputerChoice());
  }

  function restartGame() {
    setWinner(null);
    setComputerChoice(null);
    setPlayerChoice(null);
    setPlayerCounter(0);
    setComputerCounter(0);
  }

  useEffect(() => {
    switch (playerChoice) {
      case 'rock':
        if (computerChoice === 'rock') {
          setWinner('tie');
        } else if (computerChoice === 'paper') {
          setWinner('computer');
          setComputerCounter(c => c + 1);
        } else if (computerChoice === 'scissors') {
          setWinner('player');
          setPlayerCounter(p => p + 1);
        }
        break;
    
      case 'paper':
        if (computerChoice === 'paper') {
          setWinner('tie');
        } else if (computerChoice === 'scissors') {
          setWinner('computer');
          setComputerCounter(c => c + 1);
        } else if (computerChoice === 'rock') {
          setWinner('player');
          setPlayerCounter(p => p + 1);
        }
        break;
    
      case 'scissors':
        if (computerChoice === 'scissors') {
          setWinner('tie');
        } else if (computerChoice === 'rock') {
          setWinner('computer');
          setComputerCounter(c => c + 1);
        } else if (computerChoice === 'paper') {
          setWinner('player');
          setPlayerCounter(p => p + 1);
        }
    }
    
  }, [playerChoice, computerChoice])

  return (
    <div className="container">
      <div className='game'>
        <div className='header' role='header'>
          <h2>Rock Paper Scissors!</h2>
          <p>Choose one of the options:</p>
        </div>
        <div className='buttons'>
          <ChoiceButton type="rock" src="../src/assets/rock-btn.png" hover="../src/assets/rock-btn2.png" onClick={handleChoice}/>
          <ChoiceButton type="paper" src="../src/assets/paper-btn.png" hover="../src/assets/paper-btn2.png" onClick={handleChoice}/>
          <ChoiceButton type="scissors" src="../src/assets/scissors-btn.png" hover="../src/assets/scissors-btn2.png" onClick={handleChoice}/>
        </div>
        <div className='screen'>
          <ResultsScreen computerChoice={computerChoice} playerChoice={playerChoice} winner={winner} playerWins={playerCounter} computerWins={computerCounter} restartFunc={restartGame}/>
        </div>
        <div className='restart'>
          <RestartButton onClick={restartGame}/>
        </div>
      </div>
      <div>
        <img className='background' alt='A very cool rocket!' src='/src/assets/rocket-back2-2.png'></img>
      </div>
    </div>
  )
}
