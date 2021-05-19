import { render, screen } from '@testing-library/react';
import EntryItem from '.';

describe('EntryItem', () => {
  test('renders successfully', () => {
    render(<EntryItem title="My Entry" />);

    expect(screen.getByText('My Entry')).toBeInTheDocument();
  });
});
