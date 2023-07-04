import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Die from './Die';

describe('<Die />', () => {
  test('it should mount', () => {
    render(<Die />);
    
    const die = screen.getByTestId('Die');

    expect(die).toBeInTheDocument();
  });
});