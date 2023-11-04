import './resultsScreen.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

ResultsScreen.propTypes = {
    computerChoice: PropTypes.string,
    playerChoice: PropTypes.string,
    winner: PropTypes.string,
    playerWins: PropTypes.number,
    computerWins: PropTypes.number
}

function ResultsScreen({ computerChoice, playerChoice, winner, playerWins, computerWins }) {
    const [ roundMessage, setRoundMessage ] = useState(null);
    const [ counterMessage, setCounterMessage ] = useState(null);
    const [ style, setStyle ] = useState(false);
    let roundStyle, counterStyle, className;

    if (style) {
        roundStyle = {
            'fontSize': '30px',
        };
        counterStyle = {
            'display': 'none'
        }
        className = 'blink'
    }
    else if (!style) {
        roundStyle = {
            'fontSize': '20px'
        };
        counterStyle = {
            'display': 'block'
        }
        className = ''
    }

    useEffect(() => {
        if (winner === 'tie') {
            setRoundMessage(`You and the computer choose ${computerChoice}; Is's a tie!`);
            setCounterMessage(`Player: ${playerWins} / Computer: ${computerWins}`);
        } else if (winner === 'player') {
            setRoundMessage(`Your choice: ${playerChoice}; Computer's choice: ${computerChoice}. You won!`);
            setCounterMessage(`Player: ${playerWins} / Computer: ${computerWins}`);
        } else if (winner === 'computer') {
            setRoundMessage(`Your choice: ${playerChoice}; Computer's choice: ${computerChoice}. You lost!`);
            setCounterMessage(`Player: ${playerWins} / Computer: ${computerWins}`);
        }
    }, [winner, playerChoice, computerChoice, playerWins, computerWins])

    useEffect(() => {
        if (playerWins === 5) {
            setStyle(true)
            setRoundMessage('Player wins!');
            setCounterMessage('');
          } 
          if (computerWins === 5) {
            setStyle(true)
            setRoundMessage('Computer wins!');
            setCounterMessage('');
          }
    }, [playerWins, computerWins])

    return(
        <div className='results' role='complementary' >
            <div data-testid='round-info' style={roundStyle} className={className} >{winner === null ? 'Choose rock, paper or scissors!' : roundMessage}</div>
            <div data-testid='counter' style={counterStyle}>{winner === null ? '' : counterMessage}</div>
        </div>
    )
}

export default ResultsScreen;