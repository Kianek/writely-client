import { render, screen } from '@testing-library/react';
import MenuIcon from '.';

describe('MenuIcon', () => {
  test('renders successfully', () => {
    render(<MenuIcon />);

    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });
});
