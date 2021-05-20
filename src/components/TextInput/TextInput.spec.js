import { render, screen } from '@testing-library/react';
import TextInput from '.';
import userEvent from '@testing-library/user-event';
import { isEmail } from '../../validators/validators';

describe('TextInput', () => {
  test('renders successfully', () => {
    render(<TextInput placeholder="Email" value="" />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  test('calls event handler on typing', () => {
    const jimEmail = 'jim@gmail.com';
    let email = '';
    let eventHandler = jest.fn((value) => {
      email += value;
    });
    render(
      <TextInput placeholder="Email" onChange={eventHandler} value={email} />
    );

    userEvent.type(screen.getByPlaceholderText('Email'), jimEmail);

    expect(eventHandler).toBeCalledTimes(jimEmail.length);
    expect(email).toBe(jimEmail);
  });

  test('displays errors from list of validators', () => {
    let email = '';
    let eventHandler = jest.fn((value) => {
      email += value;
    });
    render(
      <TextInput
        placeholder="Email"
        onChange={eventHandler}
        validators={[isEmail]}
        value={email}
      />
    );

    const element = screen.getByPlaceholderText('Email');
    userEvent.type(element, 'jim@someplace');

    expect(element).toBeInTheDocument();
  });

  test('adds success style to bottom border when input is valid', () => {
    let email = '';
    let eventHandler = jest.fn((value) => {
      email += value;
    });
    render(
      <TextInput
        placeholder="Email"
        onChange={eventHandler}
        value={email}
        validators={[isEmail]}
      />
    );

    const element = screen.getByPlaceholderText('Email');
    userEvent.type(element, 'jim@gmail.com', { delay: 1000 }).then(() => {
      const bottomBorder = screen.getByTestId('err');

      expect(bottomBorder).toHaveClass('success');
    });
  });

  test('can set input type', () => {
    render(<TextInput password placeholder="Password" value="" />);

    expect(screen.getByPlaceholderText('Password')).toHaveAttribute(
      'type',
      'password'
    );
  });
});
