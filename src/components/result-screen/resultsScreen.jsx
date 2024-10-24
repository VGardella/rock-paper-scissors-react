import '../../assets/styles/resultsScreen.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

ResultsScreen.propTypes = {
    computerChoice: PropTypes.string,
    playerChoice: PropTypes.string,
    winner: PropTypes.string,
    playerWins: PropTypes.number,
    computerWins: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
}

function ResultsScreen({ computerChoice, playerChoice, winner, playerWins, computerWins, className, style }) {
    const [ roundMessage, setRoundMessage ] = useState(null);
    const [ counterMessage, setCounterMessage ] = useState(null);

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

        if (playerWins === 5) {
            setRoundMessage('Player wins!');
            setCounterMessage('');
        }

        if (computerWins === 5) {
            setRoundMessage('Computer wins!');
            setCounterMessage('');
        }
    }, [winner, playerChoice, computerChoice, playerWins, computerWins])

    return(
        <div className='results' role='complementary' >
            <div data-testid='round-info' className={className}>{winner === null ? 'Choose rock, paper or scissors!' : roundMessage}</div>
            <div data-testid='counter' style={style}>{winner === null ? '' : counterMessage}</div>
        </div>
    )
}

export default ResultsScreen;