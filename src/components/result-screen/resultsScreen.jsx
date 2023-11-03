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

    useEffect(() => {
        if (winner === null) {
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

    return(
        <div className='results' role='complementary' >
            <div data-testid='round-info'>{winner === 0 ? 'Choose rock, paper or scissors!' : roundMessage}</div>
            <div data-testid='counter'>{winner === 0 ? '' : counterMessage}</div>
        </div>
    )
}

export default ResultsScreen;