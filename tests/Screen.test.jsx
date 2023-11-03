import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultsScreen from '../src/components/result-screen/resultsScreen';

describe('Results screen', () => {
    it('renders screen', () => {
      render(<ResultsScreen />);
  
      expect(screen.getByRole('complementary')).toBeInTheDocument();
      expect(screen.getByText(/choose/i)).toBeInTheDocument();
    })
  })

describe('Results screen', () => {
  it('shows correct message: winner', () => {
    render(<ResultsScreen playerChoice='rock' computerChoice='scissors' winner='player' playerWins={1} computerWins={0} />)

    expect(screen.getByTestId('round-info').textContent).toMatch('Your choice: rock; Computer\'s choice: scissors. You won!')
    expect(screen.getByTestId('counter').textContent).toMatch('Player: 1 / Computer: 0')
  })

  it('shows correct message: loser', () => {
    render(<ResultsScreen playerChoice='rock' computerChoice='paper' winner='computer' playerWins={4} computerWins={3} />)

    expect(screen.getByTestId('round-info').textContent).toMatch('Your choice: rock; Computer\'s choice: paper. You lost!')
    expect(screen.getByTestId('counter').textContent).toMatch('Player: 4 / Computer: 3')
  })

  it('shows correct message: tie', () => {
    render(<ResultsScreen playerChoice='rock' computerChoice='rock' winner={null} playerWins={2} computerWins={2} />)

    expect(screen.getByTestId('round-info').textContent).toMatch('You and the computer choose rock; Is\'s a tie!')
    expect(screen.getByTestId('counter').textContent).toMatch('Player: 2 / Computer: 2')
  })
})