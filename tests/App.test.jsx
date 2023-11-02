import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest'
import App from '../src/App';
import ChoiceButton from '../src/components/buttons/choiceButton';

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

    screen.getByAltText('img').onload = onLoad();

    expect(onLoad).toHaveBeenCalled();
  })
})

// Game

describe('App', () => {
  it('calls event handler after click', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ChoiceButton type='rock' onClick={onClick} />);

    await user.click(screen.getByAltText('rock'));
    expect(onClick).toHaveBeenCalled();
  })
})