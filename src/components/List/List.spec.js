import { render, screen } from '@testing-library/react';
import List from '.';

describe('List', () => {
  test('renders successfully', () => {
    render(
      <List>
        <li>Stuff</li>
      </List>
    );

    expect(screen.getByTestId('list')).toBeInTheDocument();
  });
});
