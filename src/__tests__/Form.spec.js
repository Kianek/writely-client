import React from 'react';
import {
  cleanup,
  fireEvent,
  getByTestId,
  render,
} from '@testing-library/react';
import Form from '../components/Form';

describe('Form', () => {
  test('should render the component', () => {
    const { container } = render(<Form></Form>);

    expect(container).toBeTruthy();
  });
});
