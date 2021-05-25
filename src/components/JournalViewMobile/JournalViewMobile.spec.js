import { render, screen } from '@testing-library/react';
import JournalViewMobile from '.';

describe('JournalViewMobile', () => {
  test('renders successfully', () => {
    render(<JournalViewMobile entries={[]} />);

    expect(screen.getByTestId('jv-mobile')).toBeInTheDocument();
  });
});
