import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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