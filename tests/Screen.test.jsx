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