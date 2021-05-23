import { render, screen } from '@testing-library/react';
import Row from '.';

describe('Row', () => {
  test('renders successfully', () => {
    render(<Row>Stuff</Row>);

    expect(screen.getByText('Stuff')).toBeInTheDocument();
  });
});
