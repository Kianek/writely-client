import React from 'react';
import { screen, getByText, render } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  test('loads and displays current year', () => {
    render(<Footer />);

    expect(screen.getByText(/Writely/i)).toBeInTheDocument();
  });
});
