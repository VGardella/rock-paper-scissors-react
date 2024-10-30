import '../public/styles/App.css'
import { useState, useEffect } from 'react';
import ChoiceButton from './components/buttons/choiceButton.jsx';
import ResultsScreen from './components/result-screen/resultsScreen.jsx';
import RestartButton from './components/buttons/restartButton.jsx';

export default function App() {
  const [gameState, setGameState] = useState({
    playerChoice: null,
    computerChoice: null,
    playerCounter: 0,
    computerCounter: 0,
    roundCounter: 0,
    winner: null,
    endGame: false,
    buttonStyle: false,
    screenStyle: false,
  });

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function handleChoice(e) {
    const playerChoice = e.currentTarget.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    setGameState(prevState => {
      const playerCounter = winner === 'player' ? prevState.playerCounter + 1 : prevState.playerCounter;
      const computerCounter = winner === 'computer' ? prevState.computerCounter + 1 : prevState.computerCounter;
      const endGame = playerCounter === 5 || computerCounter === 5;

      return {
        ...prevState,
        playerChoice,
        computerChoice,
        roundCounter: prevState.roundCounter + 1,
        playerCounter,
        computerCounter,
        winner,
        endGame,
        buttonStyle: endGame,
        screenStyle: endGame,
      };
    });

  }

  useEffect(() => {
    if (gameState.endGame) {
      setTimeout(() => restartGame(), 3000);
    }
  }, [gameState.endGame])

  function restartGame() {
    setGameState({
      playerChoice: null,
      computerChoice: null,
      playerCounter: 0,
      computerCounter: 0,
      roundCounter: 0,
      winner: null,
      endGame: false,
      buttonStyle: false,
      screenStyle: false,
    })
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'player'
    }
    
    return 'computer'
  }

  return (
    <div className="container">
      <div className='game'>
        <div className='header' role='header'>
          <h2>Rock Paper Scissors!</h2>
          <p>Choose one of the options:</p>
        </div>
        <div className='buttons'>
          {['rock', 'paper', 'scissors'].map(choice => (
            <ChoiceButton key={choice} type={choice} onClick={handleChoice} className={gameState.buttonStyle ? 'button' : ''}/>
          ))}
        </div>
        <div className='screen'>
          <ResultsScreen computerChoice={gameState.computerChoice} playerChoice={gameState.playerChoice} winner={gameState.winner} playerWins={gameState.playerCounter} computerWins={gameState.computerCounter} restartFunc={restartGame} className={gameState.screenStyle ? 'blink' : ''} style={gameState.screenStyle ? {'display': 'none'} : {'display': 'block'}}/>
        </div>
        <div className='restart'>
          <RestartButton onClick={restartGame}/>
        </div>
      </div>
      <div>
        <img className='background' alt='A very cool rocket!' src='assets/rocket-back2-2.png'></img>
      </div>
    </div>
  )
}
