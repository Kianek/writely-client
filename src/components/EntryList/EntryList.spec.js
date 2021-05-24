import { render, screen } from '@testing-library/react';
import EntryList from '.';

describe('EntryList', () => {
  test('renders successfully', () => {
    render(<EntryList entries={[]} entrySelector={() => {}} />);

    expect(screen.getByTestId('entry-list')).toBeInTheDocument();
  });
});
