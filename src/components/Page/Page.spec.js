import { render, screen } from '@testing-library/react';
import Page from '.';

describe('Page', () => {
  test('renders successfully', () => {
    render(<Page></Page>);

    expect(screen.getByTestId('page')).toBeInTheDocument();
  });
});
