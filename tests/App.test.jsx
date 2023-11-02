import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest'
import App from '../src/App';
import ChoiceButton from '../src/components/buttons/choiceButton';
import RestartButton from '../src/components/buttons/restartButton';
import ResultsScreen from '../src/components/result-screen/resultsScreen';

// App

describe('App', () => {
  it('renders app', () => {
    render(<App />);

    screen.debug();
  })
})

describe('App', () => {
  it('renders game header', () => {
    render(<App />);

    expect(screen.getByRole('header').textContent).toMatch(/rock paper scissors/i);
  })
})

describe('App', () => {
  it('renders background image', () => {
    render(<App />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})

describe('App', () => {
  it('loads background image correctly', () => {    
    render(<App />);
    const onLoad = vi.fn();

    screen.getByRole('img').onload = onLoad();

    expect(onLoad).toHaveBeenCalled();
  })
})

// Buttons

describe('Choices', () => {
  it('renders buttons', () => {
    render(<ChoiceButton type="rock" src="../src/assets/rock-btn.png"/>)
    render(<ChoiceButton type="paper" src="../src/assets/paper-btn.png"/>)
    render(<ChoiceButton type="scissors" src="../src/assets/scissors-btn.png"/>)

    expect(screen.getByAltText('rock')).toBeInTheDocument();
    expect(screen.getByAltText('paper')).toBeInTheDocument();
    expect(screen.getByAltText('scissors')).toBeInTheDocument();
  });
});

describe('Choices', () => {
  it('changes button properties on hover', async () => {
    const user = userEvent.setup();
    render(<ChoiceButton type="rock" src="../src/assets/rock-btn.png" hover="../src/assets/rock-btn2.png"/>);

    await user.hover(screen.getByAltText('rock')); // hover() returns a promise, we have to 'await' it.
    expect(screen.getByAltText('rock')).toHaveAttribute('src', '../src/assets/rock-btn2.png');
  });
});

describe('Restart', () => {
  it('renders button', () => {
    render(<RestartButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})

// Screen

describe('Results screen', () => {
  it('renders screen', () => {
    render(<ResultsScreen />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getByText(/choose/i)).toBeInTheDocument();
  })
})

// Game

describe('App', () => {
  it('handler gets called when clicking', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ChoiceButton type='rock' onClick={onClick} />);

    await user.click(screen.getByAltText('rock'));
    expect(onClick).toHaveBeenCalled();
  })
})