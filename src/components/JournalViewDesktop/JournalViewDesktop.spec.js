import { render, screen } from '@testing-library/react';
import JournalViewDesktop from '.';

describe('JournalViewDesktop', () => {
  test('renders successfully', () => {
    render(<JournalViewDesktop entries={[]} />);

    expect(screen.getByTestId('jv-desktop')).toBeInTheDocument();
  });
});
