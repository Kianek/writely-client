import { render, screen } from '@testing-library/react';
import ToolBar from '.';
import Button from '../Button';

describe('ToolBar', () => {
  test('renders successfully', () => {
    render(
      <ToolBar>
        <Button>Click Me</Button>
      </ToolBar>
    );

    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
  });

  test('can justify left', () => {
    render(<ToolBar left>Blah</ToolBar>);

    expect(screen.getByTestId('toolbar')).toHaveClass('left');
  });

  test('can justify right', () => {
    render(<ToolBar right>Blah</ToolBar>);

    expect(screen.getByTestId('toolbar')).toHaveClass('right');
  });
});
