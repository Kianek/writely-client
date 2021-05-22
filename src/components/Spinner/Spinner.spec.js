import { render, screen } from '@testing-library/react';
import Spinner from '.';

describe('Spinner', () => {
  test('renders successfully', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
