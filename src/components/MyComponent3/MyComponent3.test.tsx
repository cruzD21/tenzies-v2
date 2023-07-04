import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyComponent3 from './MyComponent3';

describe('<MyComponent3 />', () => {
  test('it should mount', () => {
    render(<MyComponent3 />);
    
    const myComponent3 = screen.getByTestId('MyComponent3');

    expect(myComponent3).toBeInTheDocument();
  });
});