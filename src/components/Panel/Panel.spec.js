import { render, screen } from '@testing-library/react';
import Panel from '.';

describe('Panel', () => {
  test('renders successfully', () => {
    render(<Panel>some text</Panel>);

    expect(screen.getByTestId('panel')).toBeInTheDocument();
  });
});
