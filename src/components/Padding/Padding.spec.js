import { render, screen } from '@testing-library/react';
import Padding from '.';

describe('Padding', () => {
  test('renders successfully', () => {
    render(<Padding />);

    expect(screen.getByTestId('padding')).toBeInTheDocument();
  });
});
