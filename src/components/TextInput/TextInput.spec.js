import { render, screen } from '@testing-library/react';
import TextInput from '.';

describe('TextInput', () => {
  test('renders successfully', () => {
    render(<TextInput placeholder="Email" value="" />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });
});
