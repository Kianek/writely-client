import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Menu from '.';

describe('Menu', () => {
  test('renders successfully', () => {
    render(<Menu />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });
});
