import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavLink from '.';

describe('NavLink', () => {
  test('renders successfully', () => {
    render(<NavLink to="/">link</NavLink>, { wrapper: MemoryRouter });

    expect(screen.getByText('link')).toBeInTheDocument();
  });
});
