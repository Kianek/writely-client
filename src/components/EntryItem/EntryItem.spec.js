import { render, screen } from '@testing-library/react';
import EntryItem from '.';

describe('EntryItem', () => {
  test('renders successfully', () => {
    const entry = { title: 'My Entry' };
    render(<EntryItem entry={entry} onClick={() => {}} />);

    expect(screen.getByText('My Entry')).toBeInTheDocument();
  });
});
