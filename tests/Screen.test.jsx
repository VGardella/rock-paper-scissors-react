import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultsScreen from '../src/components/result-screen/resultsScreen';

describe('Results screen', () => {
    it('renders screen', () => {
      render(<ResultsScreen winner={null}/>);
  
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
    render(<ResultsScreen playerChoice='rock' computerChoice='rock' winner='tie' playerWins={2} computerWins={2} />)

    expect(screen.getByTestId('round-info').textContent).toMatch('You and the computer choose rock; Is\'s a tie!')
    expect(screen.getByTestId('counter').textContent).toMatch('Player: 2 / Computer: 2')
  })
})

describe('Results screen', () => {
  it('shows correct message: player wins game', () => {
    render(<ResultsScreen playerWins={5}/>)

    expect(screen.getByTestId('round-info').textContent).toMatch('Player wins!');
    expect(screen.getByTestId('counter').textContent).toMatch('');
  })

  it('shows correct message: computer wins game', () => {
    render(<ResultsScreen computerWins={5}/>)

    expect(screen.getByTestId('round-info').textContent).toMatch('Computer wins!');
    expect(screen.getByTestId('counter').textContent).toMatch('');
  })
})

describe('Results screen', () => {
  it('changes style of winners message', () => {
    render(<ResultsScreen playerWins={5} />);

    expect(screen.getByTestId('round-info').textContent).toMatch('Player wins!');
    expect(screen.getByTestId('round-info')).toHaveClass('blink');
  })

  it('changes style of winners message', () => {
    render(<ResultsScreen computerWins={5} />);

    expect(screen.getByTestId('round-info').textContent).toMatch('Computer wins!');
    expect(screen.getByTestId('round-info')).toHaveClass('blink');
  })
})