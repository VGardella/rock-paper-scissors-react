import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChoiceButton from '../src/components/buttons/choiceButton';

// Choice buttons

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

    await user.hover(screen.getByAltText('rock'));
    expect(screen.getByAltText('rock')).toHaveAttribute('src', '../src/assets/rock-btn2.png');
  });
});

// hover() returns a promise, we have to 'await' it.