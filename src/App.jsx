import '../public/styles/App.css'
import { useState, useEffect } from 'react';
import ChoiceButton from './components/buttons/choiceButton.jsx';
import ResultsScreen from './components/result-screen/resultsScreen.jsx';
import RestartButton from './components/buttons/restartButton.jsx';

export default function App() {
  const [ playerChoice, setPlayerChoice ] = useState(null);
  const [ computerChoice, setComputerChoice ] = useState(null);
  const [ playerCounter, setPlayerCounter ] = useState(0);
  const [ computerCounter, setComputerCounter ] = useState(0);
  const [ roundCounter, setRoundCounter ] = useState(0);
  const [ winner, setWinner ] = useState(null);
  const [ buttonStyle, setButtonStyle ] = useState(false);
  const [ screenStyle, setScreenStyle ] = useState(false);
  let buttonClass;

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  function handleChoice(e) {
    setPlayerChoice(e.currentTarget.id);
    setComputerChoice(getComputerChoice());
    setRoundCounter(r => r + 1);
  }

  function restartGame() {
    setWinner(null);
    setComputerChoice(null);
    setPlayerChoice(null);
    setPlayerCounter(0);
    setComputerCounter(0);
    setRoundCounter(0);
    setButtonStyle(false);
    setScreenStyle(false)
  }

  if (buttonStyle) {
    buttonClass = 'button'
  }
  else if (!buttonStyle) {
    buttonClass = ''
  }
  

  useEffect(() => {
    if (playerCounter === 5 || computerCounter === 5) {
      setButtonStyle(true);
      setScreenStyle(true);
      setTimeout(() => {
        restartGame();
      }, 3000)
      } 
  }, [playerCounter, computerCounter])

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
    
  }, [playerChoice, computerChoice, roundCounter])

  return (
    <div className="container">
      <div className='game'>
        <div className='header' role='header'>
          <h2>Rock Paper Scissors!</h2>
          <p>Choose one of the options:</p>
        </div>
        <div className='buttons'>
          <ChoiceButton type="rock" src="src/assets/images/rock-btn.png" hover="src/assets/images/rock-btn2.png" onClick={handleChoice} className={buttonClass}/>
          <ChoiceButton type="paper" src="src/assets/images/paper-btn.png" hover="src/assets/images/paper-btn2.png" onClick={handleChoice} className={buttonClass}/>
          <ChoiceButton type="scissors" src="src/assets/images/scissors-btn.png" hover="src/assets/images/scissors-btn2.png" onClick={handleChoice} className={buttonClass}/>
        </div>
        <div className='screen'>
          <ResultsScreen computerChoice={computerChoice} playerChoice={playerChoice} winner={winner} playerWins={playerCounter} computerWins={computerCounter} restartFunc={restartGame} className={screenStyle ? 'blink' : ''} style={screenStyle ? {'display': 'none'} : {'display': 'block'}}/>
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
