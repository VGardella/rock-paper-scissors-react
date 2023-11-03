import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest'
import App from '../src/App';
import ChoiceButton from '../src/components/buttons/choiceButton';

// App layout

describe('App', () => {
  it('renders app', () => {
    render(<App />);
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

    expect(screen.getByAltText(/rocket/i)).toBeInTheDocument();
  })
})

describe('App', () => {
  it('loads background image correctly', () => {    
    render(<App />);
    const onLoad = vi.fn();

    screen.getByAltText(/rocket/i).onload = onLoad();

    expect(onLoad).toHaveBeenCalled();
  })
})

// Game components

describe('Game components: buttons', () => {
  it('calls event handler after click', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ChoiceButton type='rock' onClick={onClick} />);

    await user.click(screen.getByAltText('rock'));
    expect(onClick).toHaveBeenCalled();
  })
})

describe('Game components: buttons', () => {
    it('renders functional buttons', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<App />);

        screen.getByAltText('rock').onclick = onClick;
    
        await user.click(screen.getByAltText('rock'));
        expect(onClick).toHaveBeenCalled();
    })
})

describe('Game components: screen', () => {
    it('renders screen', () => {
        render(<App />);

        expect(screen.getByRole('complementary')).toBeInTheDocument();
        expect(screen.getByTestId('round-info').textContent).toMatch(/choose/i);
        expect(screen.getByTestId('counter').textContent).toMatch('');
    })
})

describe('Game components: screen', () => {
    it('shows empty counter', async () => {
        render(<App />);

        expect(screen.getByTestId('counter')).toBeEmptyDOMElement('');
    })

    it('shows counter values', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn()

        render(<App />);
        screen.getByAltText('rock').onclick = onClick;

        await user.click(screen.getByAltText('rock'));

        expect(onClick).toHaveBeenCalled();
        expect(screen.getByTestId('counter')).not.toBeEmptyDOMElement('');
    })
})

