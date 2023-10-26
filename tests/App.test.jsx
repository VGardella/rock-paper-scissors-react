import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChoiceButton from '../src/components/buttons/choiceButton';

// Choice buttons

describe('Choices', () => {
  it('renders buttons', () => {
    render(<ChoiceButton type="rock"/>)
    render(<ChoiceButton type="paper"/>)
    render(<ChoiceButton type="scissors"/>)

    expect(screen.getByAltText('rock')).toBeInTheDocument();
    expect(screen.getByAltText('paper')).toBeInTheDocument();
    expect(screen.getByAltText('scissors')).toBeInTheDocument();
  });
});