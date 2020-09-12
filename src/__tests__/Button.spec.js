import React from 'react';
import Button from '../components/Button';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup);

describe('Button', () => {
  test('should render a button element by default', () => {
    const { getByTestId } = render(<Button>Click</Button>);

    expect(getByTestId('plainButton')).toBeTruthy();
  });

  test('should be a Link component when passed the "link" prop', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Button link to="http://google.com">
          Click
        </Button>
      </MemoryRouter>
    );

    expect(getByTestId('linkButton')).toBeTruthy();
  });
});
