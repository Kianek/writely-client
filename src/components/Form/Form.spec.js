import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '.';
import Button from '../Button';

describe('Form', () => {
  test('renders successfully', () => {
    render(<Form>form</Form>);

    expect(screen.getByText(/form/)).toBeInTheDocument();
  });
});
