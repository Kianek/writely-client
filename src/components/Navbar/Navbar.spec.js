import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '.';

describe('Navbar', () => {
  test('renders successfully', () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
