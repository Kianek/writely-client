import { render, screen } from '@testing-library/react';
import JournalItem from '.';

describe('JournalItem', () => {
  test('renders successfully', () => {
    render(<JournalItem editHandler={() => {}} deleteHandler={() => {}} />);

    expect(screen.getByTestId('journal-item'));
  });
});
