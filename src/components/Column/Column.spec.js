import { render, screen } from '@testing-library/react';
import Column from '.';

describe('Column', () => {
  test('renders succesfully', () => {
    render(<Column>Stuff</Column>);

    expect(screen.getByText('Stuff')).toBeInTheDocument();
  });
});
