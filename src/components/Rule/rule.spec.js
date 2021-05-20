import { render, screen } from '@testing-library/react';
import Rule from '.';

describe('Rule', () => {
  test('renders successfully', () => {
    render(<Rule />);

    expect(screen.getByTestId('hr')).toBeInTheDocument();
  });
});
