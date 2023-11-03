import './App.css'
import { useState } from 'react';
import ChoiceButton from './components/buttons/choiceButton';
import ResultsScreen from './components/result-screen/resultsScreen';
import RestartButton from './components/buttons/restartButton';

export default function App() {
  const [ choice, setChoice ] = useState(null);

  function handleChoice(e) {
    setChoice(e.currentTarget.id);
  }

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
          <ResultsScreen />
        </div>
        <div className='restart'>
          <RestartButton />
        </div>
      </div>
      <div>
        <img className='background' alt='A very cool rocket!' src='/src/assets/rocket-back2-2.png'></img>
      </div>
    </div>
  )
}
